const path = require('path');

module.exports = {
  entry: './index.js',  // Entry point of your application
  output: {
    filename: 'index.js',  // Output bundled file
    path: path.resolve(__dirname, 'dist')  // Output directory
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,                 // Target JS files
        exclude: /node_modules/,       // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  // Configure Babel directly here
          }
        }
      },
    ]
  },
  mode: 'production'  // Set the mode (development/production)
};