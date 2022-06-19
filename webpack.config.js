// entry -> output
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { webpack } = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: '.env.test'});
}else if (process.env.NODE_ENV === 'development'){
  require('dotenv').config({path: '.env.development'});
}


module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
        entry: "./src/app.js",
        output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
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
        }),
        new webpack.DefinePlugin({
          'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
          'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
          'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
          'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
          'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
          'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
          'process.env.FIREBASE_API_ID': JSON.stringify(process.env.FIREBASE_API_ID),
        })
      ],
      mode:"development",
      devtool: isProduction? "source-map" : "inline-cheap-module-source-map",
      resolve: {
        extensions: ['.js', '.jsx', '.scss']
      },
      devServer: {
        static: path.join(__dirname, "public"),
        compress: true,
        historyApiFallback: true, //telling we're using clientside´
      },
    }
 
};
