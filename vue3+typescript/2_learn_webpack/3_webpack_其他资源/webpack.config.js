const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {DefinePlugin} = require('webpack')
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/index.js',
        bg: './src/js/element.js'
    },
    output: {
        path: path.resolve(__dirname, 'build')
    },
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
            },
            // {
            //     test:/\.(png|jpg)$/,
            //     use:[
            //         {
            //             loader:'url-loader',
            //             options:{
            //                 limit:100*1024,
            //                 name:'img/[name].[ext]'
            //             }
            //         }
            //     ]
            // }
            {
                test: /\.(png|jpg)$/,
                type: 'asset',//asset(file-loader|url-loader),
                // asset/resource(file-loader)
                // asset/inline(url-loader)
                generator: {
                    filename: 'img/[name]_[hash:4][ext]',
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024
                    }
                }
            },
            {
                test: /\.(ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: '/index.html',//???????????????????????????????????????
            title: '??????webpack',//??????title
            filename: 'html/??????webpack.html',//??????????????????
            // templateContent:`
            // <div>??????</div>`,??????template,??????
            templateParameters: {
                title: '??????templateParameters?????????'
            },//??????????????????
            inject: 'head',//script???????????????(true|false|body|head),
            // publicPath:'html',//script???link???????????????
            scriptLoading: 'defer',//script???type('blocking'|'defer'|'module')
            chunks: ['bg', 'main']
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './package.json'
            }],
        }),
    ]
}