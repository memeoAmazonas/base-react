const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourceDirectory = path.resolve(__dirname, 'src');
const outputDirectory = path.resolve(__dirname, 'dist');
const sassDirectory = path.join(sourceDirectory, 'sass');
const staticDirectory = path.join(sourceDirectory, 'static');

const config = {
  entry: `${sourceDirectory}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        include: sassDirectory,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'file-loader?name=/static/img/[name].[ext]',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/static/fonts/[name].[ext]',
      },
      {
        test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: outputDirectory,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${sourceDirectory}/index.html`,
    }),
    new ExtractTextPlugin({
      filename: 'static/styles/main.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([{
      from: staticDirectory,
      to: path.join(outputDirectory, 'static'),
    }], {
      ignore: [],
      copyUnmodified: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};

module.exports = config;

