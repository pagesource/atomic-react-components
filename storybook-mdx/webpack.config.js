const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const babelrc = require('../babel.config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              options: {
                includePaths: [path.resolve('../node_modules')],
              },
            },
          },
        ],
      },
    ],
  },
};

module.exports = function({ config }) {
  config.module.rules.push([
    {
      test: /\.story.js?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      loader: '@mdx-js/loader',
      options: {
        compilers: [createCompiler({})],
      },
    },
    {
      test: /.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: babelrc,
    },
  ]);

  return config;
};
