var htmlWebpackConfig = require('html-webpack-plugin');

module.exports = {
    entry : {
        main :'./src/js/main.js',
        a :'./src/js/a.js'
    },
    output:{
        //path : '', 1.0才有的属性，2.0之后去掉了
        filename : './dist/js/[name]-[chunkhash].js'//hash是每次一样的版本号，chunkhash可以识别文件是否变化
    },
    plugins:[
        new htmlWebpackConfig({
            filename:'./dist/index.html',
            template: 'index.html'
        })
    ]
};