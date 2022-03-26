const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader/dist/index');
module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build')
    },
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
    resolve:{
      extensions:['.vue','.js'],
      alias:{
          '@':path.resolve(__dirname,'./src')
      }
    },
    // watch:true,是否启用热更新
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new DefinePlugin({
            baseurl: "'./'",
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: '我是打包过来的title'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './public',
                globOptions: {
                    ignore: [
                        '**/index.html'
                    ]
                }
            }],
        }),
        new VueLoaderPlugin()
    ]
}