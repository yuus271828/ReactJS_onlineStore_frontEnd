const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: { import: './src/react/index/index.js', filename: 'index.js'},
    contents: { import: './src/react/contents/contents.js', filename: 'contents.js'},
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    static: [
      {
        directory: path.join(__dirname, 'build/'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'build/contents.html'),
        publicPath: ['/contents', '/contents/*'],
      },
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        secure: false,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
    open: ['/'],
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    /*new HtmlWebpackPlugin(
      {
      template: './src/resource/templates/index.html',
      filename: 'index.html',
      title: '茂洋烏魚子',
    },{
      template: './src/resource/templates/contents.html',
      filename: 'contents.html',
      title: '茂洋烏魚子',
    })*/
  ],
  module:{
    rules:[
      {
        test:/\.(css|sass|scss)$/i,
        use:["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}