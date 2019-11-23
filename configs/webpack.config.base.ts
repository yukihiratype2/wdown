import path from 'path'
import webpack from 'webpack';
import { dependencies } from '../package.json';

const config: webpack.Configuration = {
  externals: [...Object.keys(dependencies || {})],
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }, 'ts-loader']
    }],
  },
  output: {
    path: path.join(__dirname, '..', 'output'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}

export default config;
