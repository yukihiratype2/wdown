import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin'

export default merge.smart(baseConfig, {
  mode: 'production',

  target: 'electron-renderer',

  entry: path.join(__dirname, '..', 'src/main.ts'),
  output: {
    path: path.join(__dirname, '..', 'output/'),
    publicPath: '',
    filename: 'main.js',
  },
  module: {
    rules: []
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new CopyPlugin([{
      from: path.join(__dirname, '..', 'src/index.html'),
      to: path.join(__dirname, '..', 'output/')
    }])
  ],
} as webpack.Configuration);
