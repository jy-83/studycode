const path=require('path');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:[
                    'style-loader',
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
                test:/\.(png|jpg)$/,
                type:'asset',//asset(file-loader|url-loader),
                // asset/resource(file-loader)
                // asset/inline(url-loader)
                generator:{
                    filename:'img/[name]_[hash:4][ext]',
                },
                parser:{
                    dataUrlCondition:{
                        maxSize:100*1024
                    }
                }
            }
        ]
    }
}