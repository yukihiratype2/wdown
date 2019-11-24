/* eslint import/no-extraneous-dependencies: off */

import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.config.base';

export default merge.smart(baseConfig, {
  mode: 'production',

  target: 'electron-renderer',

  entry: path.join(__dirname, '..', 'src/main.ts'),
  output: {
    path: path.join(__dirname, '..', 'output/build/'),
    publicPath: '',
    filename: 'main.js',
  },
  module: {
    rules: []
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
} as webpack.Configuration);
