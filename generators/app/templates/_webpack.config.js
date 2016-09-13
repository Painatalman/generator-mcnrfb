var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
      contentBase: './dist'
  },
  configFile: './.eslintrc',
  devtool: 'source-map',
  plugins: [
      new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: path.join(__dirname, 'src')
    }
    ]
  }
};
