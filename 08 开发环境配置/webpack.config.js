/*
开发环境的配置：
入口文件在output里写'js/built.js',
如图片、其他资源在module的{}里的rule里
[
    {写options:{
        outputPath:'imgs'
    }}
]
运行指令：
1.手动打包：webpack
2.自动打包:npx webpack-dev-server
*/
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "js/built.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["less-loader", "style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options:{
            //小于8kb将转为字符串
            limit:8*1024,
            outputPath:"imgs"
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
     
      },
      {
        //打包其他资源
        exclude: /\.(css|js|html|gif|png|jpg|less|json)$/,
        loader: "file-loader",
        options:{
            outputPath:"media"
        }

      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  devServer:{
      contentBase:resolve(__dirname,'build'),//目录
      compress:true,
      open:true,//自动打开浏览器
      port:3000//端口号
  }
};
