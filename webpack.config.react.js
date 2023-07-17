const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'webpack-react.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
};
