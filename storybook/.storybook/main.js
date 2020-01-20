// your app's webpack.config.js
const custom = require('./webpack.config.js');

module.exports = {
  stories: ['../stories/**/*.stories.mdx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-create-react-app'],
};
