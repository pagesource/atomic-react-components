const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const babelrc = require('../babel.config');

const root = path.resolve(__dirname, '../');

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

module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.story.js?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /docs\.mdx$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: 'babel-loader',
          options: {
            root: './',
            plugins: [
              '@babel/plugin-transform-react-jsx',
              [
                'module-resolver',
                {
                  cwd: 'packagejson',
                  alias: {
                    '@mdx-js': './storybook-mdx/node_modules/@mdx-js',
                    '@storybook': './storybook-mdx/node_modules/@storybook',
                  },
                },
                'storybook-settings',
              ],
            ],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    },
    {
      test: /.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: babelrc,
    }
  );

  return config;
};

// {
//   test: /\.(css)$/,
//   use: [
//     {
//       loader: 'style-loader',
//     },
//     {
//       loader: 'css-loader',
//       options: {
//         options: {
//           includePaths: [path.resolve('../node_modules')],
//         },
//       },
//     },
//   ],
// },
