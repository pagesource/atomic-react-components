import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

import packageJson from './package.json';

const dependencies = packageJson.dependencies || {};

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/components.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', { modules: false }], 'next'],
    }),
  ],
  external: [...Object.keys(dependencies), 'next/link'],
};
