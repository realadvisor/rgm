import fs from 'fs';
import path from 'path';
import replace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import gzipSize from 'gzip-size';
import * as brotliSize from 'brotli-size';
import pkg from './package.json';

const input = './src/rgm.js';
const external = id =>
  id.startsWith('.') === false && path.isAbsolute(id) === false;

const babelOptions = {
  configFile: false,
  babelrc: false,
  babelHelpers: 'bundled',
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        loose: true,
        targets: {
          browsers: [
            // all browsers specified in esmodules: true
            // 'edge>=16',
            'firefox>=60',
            'chrome>=61',
            // 'safari>=10.1',
            'opera>=48',
            // 'ios_saf>=10.3',
            'android>=61',
            'op_mob>=48',
            'and_chr>=61',
            'and_ff>=60',
            'samsung>=8.2',
          ],
        },
      },
    ],
    '@babel/flow',
    '@babel/react',
  ],
};

export default [
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [
      babel(babelOptions),
      replace({ 'process.env.DOCUMENTATION': 'undefined' }),
    ],
  },

  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external,
    plugins: [
      babel(babelOptions),
      replace({ 'process.env.DOCUMENTATION': 'undefined' }),
    ],
  },

  // to check esm production size
  {
    input,
    output: { file: 'dist/rgm.esm.production.js', format: 'esm' },
    external,
    plugins: [
      babel(babelOptions),
      replace({
        'process.env.DOCUMENTATION': 'undefined',
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
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
