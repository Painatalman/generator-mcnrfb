// basic setup
var path = require('path');
var webpack = require('webpack');

// Webpack plugins
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = { 
  entry: './src/main.js',
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin()
  ],
   module: {
     loaders: [
      {
        enforce: "pre",
        test: /\.css$/,
        loader: 'stylelint',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        enforce: "pre",
        test: /.jsx?$/,
        loader: 'eslint',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src')
      ]
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1',
        'postcss-loader'
      ],
      include: path.join(__dirname, 'src')
    }],
  },
  postcss: function() {
    var plugins = require('./postcss.config.js')
      .plugins;
    return plugins;
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  }
};
