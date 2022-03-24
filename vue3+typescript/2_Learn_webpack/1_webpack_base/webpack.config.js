const path=require('path')
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname+'/build'),
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    }
}