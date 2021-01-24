const{resolve}  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "built.js",
  },
  module: {
    rules:[
        {
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
    },
    {
        test:/\.(jpg|png|gif)$/,
        loader:'url-loader',
        //下载 url file
        options:{
            //图片大小小于8kb，就会被base64处理
            //优点：减少请求数量
            //缺点：图片体积更大（请求速度更慢）
            limit:16*1024
        }
    },{
        test:/\.html$/,
        loader:'html-loader'//处理Html里的图片
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode:'development'
};
