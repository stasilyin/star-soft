const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    styles: path.resolve(__dirname, '../src/styles/index.scss'),
    index: path.resolve(__dirname, '../src/pug/pages/index.pug'),
    services: path.resolve(__dirname, '../src/pug/pages/services.pug'),
    careers: path.resolve(__dirname, '../src/pug/pages/careers.pug'),
    app: path.resolve(__dirname, '../src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "scripts/bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[hash].[ext]',
          publicPath: '../',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/pug/pages/index.pug'),
    }),
    new HtmlWebpackPlugin({
      filename: 'services.html',
      template: path.resolve(__dirname, '../src/pug/pages/services.pug'), 
    }),
    new HtmlWebpackPlugin({
      filename: 'about-us.html',
      template: path.resolve(__dirname, '../src/pug/pages/about-us.pug'), 
    }),
    new HtmlWebpackPlugin({
      filename: 'careers.html',
      template: path.resolve(__dirname, '../src/pug/pages/careers.pug'), 
    }),
    new HtmlWebpackPlugin({
      filename: 'partners.html',
      template: path.resolve(__dirname, '../src/pug/pages/partners.pug'), 
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
    }),
  ],
};
