const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const path = require('path');

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
  config.module.rules.push(
    {
      test: /\.story.js?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    },
    {
      test: /\.(svg)$/,
      loader: 'svg-sprite-loader',
    }
  );

  config.plugins.push(
    new SpriteLoaderPlugin({
      plainSprite: true,
    })
  );

  return config;
};
