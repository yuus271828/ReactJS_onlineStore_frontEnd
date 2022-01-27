const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports={
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: { import: './src/index.js', filename: 'index.js'},
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    static: [
      {
        directory: path.join(__dirname, 'dist/'),
        publicPath: '/*',
      },
    ],
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
    new CopyPlugin({
      patterns: [
        { from: "./public" },
      ],
    }),
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