module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "./build/build.js"
    },
    externals: {
       // 'jquery': 'jQuery'
    },
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: "style!css" },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            // { test: /\.(png|jpg)$/, loader: 'url?limit=10240&'},
            //file-loader 设置文件路径
            { test: /\.(png|jpg|jpeg|gif|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
              loader:"url?limit=10240&name=./build/images/[hash:8].[name].[ext]" },
            { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,loader: 'file'},
            //less-loader和less来处理
            { test: /\.less$/, loader: 'style!css!less'}
           
        ]
    }
};
