const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "built.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //打包其他资源
        exclude: /\.(css|js|html|gif|png|jpg|less)$/,
        loader: "url-loader",

      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  //开发服务器devServer:自动化编译
  //在内存内编译打包，不会有输出
  //指令：webpack-dev-server 就是没有built
  devServer:{
    contentBase:resolve(__dirname,'build'),
    compress:true,
    port:3000,//端口号
    open:true
  }
};
