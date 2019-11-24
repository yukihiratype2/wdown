/* eslint import/no-extraneous-dependencies: off */

import merge from 'webpack-merge';
import path from 'path';
import webpack from 'webpack';
import { spawn } from 'child_process';
import baseConfig from './webpack.config.base';


const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;

export default merge.smart(baseConfig, {
  mode: 'development',

  target: 'electron-renderer',

  entry: [
    'react-hot-loader/patch',
    require.resolve('../src/index.tsx'),
  ],
  output: {
    publicPath,
    filename: 'renderer.dev.js',
  },
  module: {
    rules: [
      {
        test: /\.global\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /^((?!\.global).)*\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  devServer: {
    port,
    publicPath,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    before() {
      if (process.env.INVOKE_MAIN) {
        spawn('npm', ['run', 'start-main-dev'], {
          shell: true,
          env: process.env,
          stdio: 'inherit',
        })
          .on('close', (code) => process.exit(code))
          .on('error', (spawnError) => console.error(spawnError));
      }
    },
  },
} as webpack.Configuration);
