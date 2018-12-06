import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';
import visualizer from 'rollup-plugin-visualizer';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import flowEntry from 'rollup-plugin-flow-entry';
import flow from 'rollup-plugin-flow';
import pkg from './package.json';

export default {
  input: './lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
  ],
  plugins: [
    // Preferably set as first plugin.
    peerDepsExternal({
      includeDependencies: true,
    }),
    url(),
    json(),
    babel(),
    resolve(),
    flowEntry(),
    flow({ pretty: true }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
    }),
    visualizer({
      filename: './statistics.html',
      title: 'My Bundle',
    }),
    filesize(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
