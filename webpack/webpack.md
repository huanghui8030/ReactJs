# webpack

## 参考文档

- [webpack官网](http://webpack.github.io/)
- [webpack官方文档](http://webpack.github.io/docs/)
- [学习webpack](http://www.w2bc.com/Article/50764)
- [轻松入门react和webpack](https://segmentfault.com/a/1190000002767365)

## 什么是webpack

​	webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。

## webpack的优势

- webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。
- 能被模块化的不仅仅是 JS 了。
- 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等
- 扩展性强，插件机制完善，特别是支持 React 热插拔（见 [react-hot-loader](https://github.com/gaearon/react-hot-loader) ）的功能让人眼前一亮

## 安卓和配置

### 1、安装

- 基于`node`，需要先安装Node.js
- 通过`suto npm install -g webpack`(mac下)安装全局的webpack
- 当然也可以通过gulp来处理webpack任务，如果使用gulp的话就`npm install --save-dev gulp-webpack`


### 2、配置

​	Webpack的构建过程需要一个配置文件webpack.config.js，例如：

```js
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: {
        entry1: './entry/entry1.js',
        entry2: './entry/entry2.js'
    },
    output: {
        path: __dirname,
        filename: '[name].entry.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [commonsPlugin]
};
```

这里对Webpack的打包行为做了配置，主要分为几个部分：

- entry：指定打包的入口文件，每有一个键值对，就是一个入口文件
- output：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称，filename里面的`[name]`会由entry中的键（这里是entry1和entry2）替换
- resolve：定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
- module：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。比如这里定义了凡是`.js`结尾的文件都是用`babel-loader`做处理，而`.jsx`结尾的文件会先经过`jsx-loader`处理，然后经过`babel-loader`处理。当然这些loader也需要通过`npm install`安装
- plugins: 这里定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取出公用的部分，生成common.js

当然Webpack还有很多其他的配置，具体可以参照它的[配置文档](http://webpack.github.io/docs/configuration.html#entry)

### 3、执行打包

​	如果使用的webpack全局变量安装的webpack的话，可以通过命令行直接执行打包命令，例如：`webpack --config webpack.config.js`



## 在Webpack下实时调试React组件

Webpack和React结合的另一个强大的地方就是，在修改了组件源码之后，不刷新页面就能把修改同步到页面上。这里需要用到两个库`webpack-dev-server`和`react-hot-loader`。

首先需要安装这两个库，`npm install --save-dev webpack-dev-server react-hot-loader`

安装完成后，就要开始配置了，首先需要修改entry配置：

```js
entry: {
  helloworld: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './helloworld'
  ]
},
```

通过这种方式指定资源热启动对应的服务器，然后需要配置`react-hot-loader`到loaders的配置当中，比如我的所有组件代码全部放在scripts文件夹下：

```js
{
  test: /\.js?$/,
  loaders: ['react-hot', 'babel'],
  include: [path.join(__dirname, 'scripts')]
}
```

最后配置一下plugins，加上热替换的插件和防止报错的插件：

```js
plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]
```

这样就可以在本地3000端口开启调试服务器了，比如我的页面是根目录下地`index.html`，就可以直接通过`http://localhost:3000/index.html`访问页面，修改React组件后页面也会被同步修改，这里貌似使用了websocket来同步数据。图是一个简单的效果：







