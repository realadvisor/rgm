import fs from 'fs';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import gzipSize from 'gzip-size';
import * as brotliSize from 'brotli-size';
import pkg from './package.json';

const input = './src/index.js';
const name = 'rgm';
const globals = { react: 'React', 'react-dom': 'ReactDOM' };
const external = Object.keys(globals);

const babelOptions = modern => ({
  runtimeHelpers: true,
  configFile: false,
  babelrc: false,
  presets: [
    modern
      ? '@babel/preset-modules'
      : [
          '@babel/env',
          {
            loose: true,
          },
        ],
    '@babel/flow',
    '@babel/react',
  ],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['DOCUMENTATION'],
      },
    ],
  ],
});

export default [
  {
    input,
    output: { file: 'dist/rgm.umd.js', format: 'umd', name, globals },
    external,
    plugins: [
      babel(babelOptions(false)),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },

  {
    input,
    output: { file: 'dist/rgm.min.js', format: 'umd', name, globals },
    external,
    plugins: [
      babel(babelOptions(false)),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  },

  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [babel(babelOptions(false))],
  },

  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external,
    plugins: [babel(babelOptions(true))],
  },

  // to check esm production size
  {
    input,
    output: { file: 'dist/rgm.esm.production.js', format: 'esm' },
    external,
    plugins: [
      babel(babelOptions(true)),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
      {
        generateBundle(outputOptions, bundle) {
          let sizeInfo = '';
          for (const [name, chunk] of Object.entries(bundle)) {
            const parsedSize = chunk.code.length;
            const gzippedSize = gzipSize.sync(chunk.code);
            const brotliedSize = brotliSize.sync(chunk.code);

            sizeInfo += `Size of ${name}
            =============================
            min: ${parsedSize} b
            gzip: ${gzippedSize} b
            brotli: ${brotliedSize} b`.replace(/^\s+/gm, '');
          }
          console.info(sizeInfo);
          fs.writeFileSync('size-snapshot.txt', sizeInfo, 'utf-8');
        },
      },
    ],
  },
];
