module.exports = api => {
  let dev = false;
  let modules = 'commonjs';

  switch (api.env()) {
    case 'docs':
    case 'test':
      dev = true;
      modules = false;
      break;
    case 'dist-dev':
      dev = true;
      modules = false;
      break;
    case 'dist-prod':
    case 'esm':
      modules = false;
      break;
    case 'build':
    default:
      break;
  }

  return {
    ignore:["lib/**/*.test.js","lib/**/*.story.js"],
    plugins: [
      [
        "babel-plugin-styled-components",
        {
          "ssr": true,
          "displayName": true
        }
      ]
    ],
    presets: ["@babel/preset-flow",['@react-bootstrap', { dev, modules, removePropTypes: !dev }]],
  };
};
