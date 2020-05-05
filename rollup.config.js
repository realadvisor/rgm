import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

const input = './src/index.js';
const name = 'rgm';
const globals = { react: 'React', 'react-dom': 'ReactDOM' };
const external = Object.keys(globals);

const babelOptions = {
  runtimeHelpers: true,
  // plugins: ['external-helpers'],
  // externalHelpers: true,
  configFile: false,
  babelrc: false,
  presets: [['@babel/env', { loose: true }], '@babel/flow', '@babel/react'],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['DOCUMENTATION'],
      },
    ],
  ],
};

export default [
  {
    input,
    output: { file: 'dist/rgm.umd.js', format: 'umd', name, globals },
    external,
    plugins: [
      babel(babelOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },

  {
    input,
    output: { file: 'dist/rgm.min.js', format: 'umd', name, globals },
    external,
    plugins: [
      babel(babelOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  },

  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [babel(babelOptions)],
  },

  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external,
    plugins: [babel(babelOptions), sizeSnapshot()],
  },

  // to check esm production size
  {
    input,
    output: { file: 'dist/rgm.esm.production.js', format: 'esm' },
    external,
    plugins: [
      babel(babelOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
    ],
  },
];
