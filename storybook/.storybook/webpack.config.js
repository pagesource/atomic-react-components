const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})],
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        use: ['babel-loader'],
      },
    ],
  },
};
