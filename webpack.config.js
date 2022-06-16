// entry -> output
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
        entry: "./src/app.js",
        output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
      },
      module: {
        rules: [
          {
            test: /\.js$/, //regular expresion
            exclude: /node_modules/,
            use: { loader: "babel-loader"}, //loader to use jsx as js
          },
          {
            test: /\.s?css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: (resourcePath, context) => {
                    return (
                      path.relative(path.dirname(resourcePath), context) + '/'
                    );
                  },
                },  
              },
              { loader: "css-loader", options: { sourceMap: true } },
              { loader: "sass-loader", options: { sourceMap: true } },
              
            ], //adding loader for css and styles into the babel loader  
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles.css',
          chunkFilename: 'app.css'
        })
      ],
      mode:"development",
      devtool: isProduction? "source-map" : "inline-cheap-module-source-map",
      resolve: {
        extensions: ['.js', '.jsx', '.scss']
      },
      devServer: {
        static:{
          directory: path.join(__dirname, "public") },
          compress: true,
          port: 9000,
        historyApiFallback: true, //telling we're using clientside
      },
    }
 
};
