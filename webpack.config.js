const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: './src/server-entry.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  target: 'node',
  externals: [nodeExternals()],
};

module.exports = config;
