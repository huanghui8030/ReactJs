### React 特点
>* 1.声明式设计 −React采用声明范式，可以轻松描述应用。
>* 2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
>* 3.灵活 −React可以与已知的库或框架很好地配合。
>* 4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
>* 5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
>* 6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

### 实例解析：
#### 1、引入的库文件
    实例中我们引入了三个库： react.min.js 、react-dom.min.js 和 browser.min.js：
他们必须首先加载。
- react.min.js - React 的核心库
- react-dom.min.js - 提供与 DOM 相关的功能
- browser.min.js - 用于将 JSX 语法转为 JavaScript 语法。这一步很消耗时间。实际上线的时候，应该讲它放到服务器完成
```
    $ balel src --out-dir build
```
上面的命令可以将src子目录的js文件进行语法转换，转码后的文件全部放到bulid子目录下。

#### 2、ReactDOM.render()
ReactDOM.render是React的最基本方法，用户将模板转为HTML语法，并插入指定的DOM节点
```
ReactDOM.render(
    <h1>Hello,world!</h1>,
    document.getElementById('divId')
);
```
上面的代码将一个h1标签，插入到divId节点中。例如demo1.html

#### 3、JSX语法



