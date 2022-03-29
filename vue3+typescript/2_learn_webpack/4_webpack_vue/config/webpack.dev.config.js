const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common=require('./webpack.common.config');
const {merge}=require('webpack-merge');
module.exports=merge(common,{
    plugins:[
        new CleanWebpackPlugin(),
    ],
    mode:'development',
    devServer: {
        // contentBase: "./public",//作用就是打包后的文件放在内存重如果某一个资源找不到的话会在这个路径下找(4+版本好像已经不支持了)
        hot: true,//hmr 热模块替换
        host:'127.0.0.1',//ip
        port:8082,//端口号
        open:true,//是否自动打开浏览器
        // compress:false
        proxy:{
            '/api':{
                target:'http://data.tfwcy.com/api',
                pathRewrite:{
                    '^/api':''
                },
                changeOrigin:true,
            },
            '/test':{
                target:'https://api.tfwcy.com',
                pathRewrite: {
                    '^/test':''
                },
                changeOrigin: true,
            }
        }
    },
})