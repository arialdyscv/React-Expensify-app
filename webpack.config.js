// entry -> output

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path:path.join(__dirname, '\public'),
        filename: 'bundle.js'
    },
    // loader
    module: {
        rules:[{
                loader: 'babel-loader',//loader to use jsx as js
                test: /\.js$/, //regular expresion
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: ['style-loader','css-loader', 'sass-loader']//adding loader for css and styles into the babel loader       
            }]
    },
    devtool: 'inline-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, '\public'),
        historyApiFallback: true //telling we're using clientside
    }
};




