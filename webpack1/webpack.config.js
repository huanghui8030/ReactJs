var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {                       // 编译入口配置
    app: './app/app.js'          // app/app.js 入口文件
  },
  output: {                      // 编译后输出配置
    path: __dirname + '/dist',   //__dirname指当前目录，生成./dist文件
    filename: '[name].build.js',
    publicPath: '/'              // 资源路径，如：css的背景图片等路径
  },
  module: {
    loaders: [
      {
        test: /\.js$/,              //如果jsx 就jsx
        exclude: /node_modules/,    //禁止编译node_modules文件
        loader: 'babel-loader',     //babel-loder
        query: {
            presets: ['es2015', 'env']  //babel-preset-env
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'dist/admin.html'
    })
  ],
  devServer: {
    contentBase: __dirname + 'dist',
    compress: true,
    port: 9090
  }
};