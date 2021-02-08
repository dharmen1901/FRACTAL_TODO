const path = require('Path');

module.exports = {
   entry: path.join(__dirname, 'src/main.js'),
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   devServer: {
      port: 8080,
      contentBase: path.join(__dirname, 'dist'),
      inline: true,
      hot: true,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.(less)$/,
            use: [{
               loader: 'style-loader' // creates style nodes from JS strings
            }, {
               loader: 'css-loader' // translates CSS into CommonJS
            }, {
               loader: 'less-loader' // compiles Less to CSS
            }]
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         }
      ]
   },
}