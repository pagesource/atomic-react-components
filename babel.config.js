module.exports = {
  compact: true,
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-react-jsx'],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: ['data-test'] }]],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-umd'],
    },
  },
  ignore: ['node_modules', 'utils.js'],
};
