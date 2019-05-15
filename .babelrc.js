module.exports = api => {
  let dev = false;
  let modules = 'commonjs';

  switch (api.env()) {
    case 'docs':
    case 'test':
      dev = true;
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
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: true,
          displayName: true,
        },
      ],
    ],
    presets: [
      '@babel/preset-flow',
      [
        'next',
        {
          'preset-env': {
            modules: 'commonjs',
          },
        },
      ],
      ['@react-bootstrap', { dev, modules, removePropTypes: !dev }],
    ],
  };
};
