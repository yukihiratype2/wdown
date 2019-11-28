/* eslint import/no-extraneous-dependencies: off */

import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }, 'ts-loader'],
    }],
  },
  output: {
    path: path.join(__dirname, '..', 'output'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      views: path.resolve(__dirname, '..', 'src/views/'),
      utils: path.resolve(__dirname, '..', 'src/utils/'),
      components: path.resolve(__dirname, '..', 'src/components/'),
      '@': path.resolve(__dirname, '..', 'src/'),
    },
  },
};

export default config;
