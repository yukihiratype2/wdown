/* eslint global-require: off */
const developmentEnvironments = ['development', 'test'];

module.exports = (api) => {
  const development = api.env(developmentEnvironments);

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: { electron: require('electron/package.json').version },
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      require('@babel/preset-typescript'),
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      'react-hot-loader/babel',
      'babel-plugin-styled-components',
    ],
  };
};
