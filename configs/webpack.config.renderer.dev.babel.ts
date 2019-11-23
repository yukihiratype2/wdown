import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';
import path from 'path';
import webpack from 'webpack';
import { spawn } from 'child_process';


const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;

export default merge.smart(baseConfig, {
  mode: 'development',

  target: 'electron-renderer',

  entry: [
    require.resolve('../src/index.tsx')
  ],
  output: {
    publicPath,
    filename: 'renderer.dev.js',
  },
  module: {
    rules:[]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    port,
    publicPath,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    before() {
      if (true) {
        console.log('Starting Main Process...');
        spawn('npm', ['run', 'start-main-dev'], {
          shell: true,
          env: process.env,
          stdio: 'inherit'
        })
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError));
      }
    }
  }
} as webpack.Configuration);
