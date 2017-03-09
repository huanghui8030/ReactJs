var webpack = require('webpack');

module.exports = {
    entry: './entry.js',
    output: {
    path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {test: /\.css$/, loader: 'style-loader!css-loader'}  //20170309，-loader一定不能省略
        ]
    },
    plugins: [
        new webpack.BannerPlugin('作者：黄卉')
    ] 
}
