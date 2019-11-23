import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import webpack from 'webpack';


export default merge.smart(baseConfig, {
  mode: 'production',

  target: 'electron-renderer',

  entry: path.join(__dirname, '..', 'src/index.tsx'),
  output: {
    path: path.join(__dirname, '..', 'output/build/dist'),
    publicPath: '',
    filename: 'renderer.prod.js',
  },
  module: {
    rules: [
      {
        test: /\.global\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
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
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  },
} as webpack.Configuration);
