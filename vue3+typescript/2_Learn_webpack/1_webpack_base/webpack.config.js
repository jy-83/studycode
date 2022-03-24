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
                    'css-loader'
                ]
            }
        ]
    }
}