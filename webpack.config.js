const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src/app.ts'),
    output:{
        filename: 'bundle.js',
        path:  path.resolve(__dirname,'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {  
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts', '.js']
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        allowedHosts:'auto'
    }
};