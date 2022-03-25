const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');
const {DefinePlugin}=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
module.exports={
    entry:'./src/main.js',
    mode:'development',
    output:{
        path:path.resolve(__dirname,'build')
    },
    module:{
      rules:[
          {
              test:/\.(css|scss)$/,
              use:[
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
              ]
          },{
            test:/\.vue$/,
              use:'vue-loader'
          }
      ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new DefinePlugin({
            baseurl:"'./'",
            __VUE_OPTIONS_API__:true,
            __VUE_PROD_DEVTOOLS__:false
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            title:'我是打包过来的title'
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from:'./public',
                globOptions:{
                    ignore:[
                        '**/index.html'
                    ]
                }
            }],
        }),
        new VueLoaderPlugin()
    ]
}