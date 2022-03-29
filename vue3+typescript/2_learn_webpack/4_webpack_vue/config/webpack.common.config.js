const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader/dist/index');
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../build')
    },
    resolve:{
        extensions:['.vue','.js'],
        alias:{
            '@':path.resolve(__dirname,'../src')
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
        new VueLoaderPlugin()
    ]
}