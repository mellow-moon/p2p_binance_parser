const path = require("path");
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    //hot: true
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  resolve: {
    fallback: {
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      buffer: require.resolve('buffer'),
      url: require.resolve('url'),
      // -------
      zlib: require.resolve("browserify-zlib"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      assert: require.resolve("assert/"),
      util: require.resolve("util/"),
      "fs": false,
      "async_hooks": false,
      "net": false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              }
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.woff2?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}