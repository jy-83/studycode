const CopyWebpackPlugin = require('copy-webpack-plugin');
const common=require('./webpack.common.config');
const {merge}=require('webpack-merge');
module.exports=merge(common,{
    mode:'production',
    plugins:[
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
    ]
})