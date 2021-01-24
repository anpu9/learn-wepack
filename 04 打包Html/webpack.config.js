const path=require('path')
/*
loader:1.下载 2.使用
plugins:1.下载 2.引用 3.引用
*/
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:"built.js",
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            
        })
    ],
    mode:"development"
}