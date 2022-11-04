const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    
    static: './src',

  },
  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',
      template: './src/index.html',

    }),

  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].[chunkhash].js',
    clean:true,
  },
  optimization: {

    runtimeChunk: 'single',

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },
};