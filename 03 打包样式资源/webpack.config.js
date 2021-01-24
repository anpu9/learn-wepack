/*配置文件 */
const { resolve } = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //Loader的配置，从下到上执行
      {
        test: /\.less$/, //less需要less_loader
        use: [
          "style-loader", //创建style标签，将Js中的样式擦汗如进行，添加到Head中生效
          "css-loader", //将css文件变成commonjs模块加载到js中
          "less-loader", //将less改成css
        ],
      },
      {
        test: /\.css$/, //css需要css_loader
        use: [
          "style-loader", //创建style标签，将Js中的样式擦汗如进行，添加到Head中生效
          "css-loader", //将css文件变成commonjs模块加载到js中
        ],
      },
    ],
    // plugins: [
    //   //plugins的配置
    // ],
  },
  mode: "development", //开发模式
};
