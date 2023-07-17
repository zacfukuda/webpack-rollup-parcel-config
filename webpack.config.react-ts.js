const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'webpack-react-ts.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
