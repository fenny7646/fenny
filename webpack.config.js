const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/scripts/js/index.js', // Single entry point: index.js
  output: {
    filename: 'index.bundle.js', // Output file: index.bundle.js
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new Dotenv(), // Load environment variables
    // Plugin for index.html
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for index.html
      filename: 'index.html', // Output HTML file name
      inject: true // Ensure script tags are injected
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html', // Template for index.html
      filename: 'projects.html', // Output HTML file name
      inject: true // Ensure script tags are injected
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser', // Polyfill for the `process` object
    })
  ],
  resolve: {
    fallback: {
      process: require.resolve('process/browser'), // Polyfill for 'process'
      buffer: require.resolve('buffer/'), // Polyfill for 'buffer'
      stream: require.resolve('stream-browserify'), // Polyfill for 'stream'
      crypto: require.resolve('crypto-browserify'), // Polyfill for 'crypto'
      os: require.resolve('os-browserify/browser'), // Polyfill for 'os'
      path: require.resolve('path-browserify'), // Polyfill for 'path'
      vm: require.resolve('vm-browserify') // Polyfill for 'vm'
    }
  },
  mode: 'none' // No specific mode (for testing purposes)
};