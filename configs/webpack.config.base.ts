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
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
};

export default config;
