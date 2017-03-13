# vueJs
## 参考资料
- [VUE和其他框架的对比](http://cn.vuejs.org/v2/guide/comparison.html)
- [VUE介绍](http://cn.vuejs.org/v2/guide/single-file-components.html)


## 介绍

- 兼容性：Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。 Vue.js 支持所有兼容 ECMAScript 5 的浏览器。

- [VUE-GitHub](https://github.com/vuejs/vue)

## vue基础

### 1、构造函数

通过使用构造函数创建根Vue实例来引导每个Vue vm Vue：

```
var vm = new Vue（{
  // options
}）

```

当您实例化Vue实例时，您需要传入一个options对象，该对象可以包含数据，模板，要装载的元素，方法，生命周期回调等选项。完整的选项列表可以在API参考中找到。


该Vue构造可以扩展到创建可重用组件构造预先定义的选项：

```
var MyComponent = Vue.extend（{
  //扩展选项
}）
//所有实例的“MyComponent”都创建
//预定义的扩展选项
var myComponentInstance = new MyComponent（）

```

### 2、属性和方法

每个Vue实例代理其data对象中找到的所有属性：

```

var data = { a：1 }
var vm = new Vue（{
  data：data
}）
vm.a === data.a //  - > true
//设置属性也会影响原始数据
vm.a = 2
data.a //  - > 2
// ...，反之亦然
data.a = 3
vm.a //  - > 3

```

### 3、生命周期

每个Vue实例在创建时都会经历一系列初始化步骤 - 例如，它需要设置数据观察，编译模板，将实例装载到DOM，以及在数据更改时更新DOM。一路上，它还将调用一些生命周期钩子，这使我们有机会执行自定义逻辑。例如，在created创建实例后调用钩子：

```
var vm = new Vue（{
  data：{
    a：1
  }，
  created：function（） {
    //`this`指向vm实例
    console .log（'a is：' + this .a）
  }}
}）
//  - >“a is：1”
```

## 模板语法

Vue.js使用基于HTML的模板语法，允许您将渲染的DOM声明性地绑定到底层的Vue实例的数据。所有Vue.js模板都是有效的HTML，可以由符合规范的浏览器和HTML解析器解析。

在引擎盖下，Vue将模板编译为虚拟DOM渲染函数。结合反应性系统，Vue能够智能地找出最小数量的组件重新渲染和应用程序状态更改时最小量的DOM操作。

如果您熟悉Virtual DOM概念并且更喜欢JavaScript的原始功能，您还可以直接编写render函数，而不是模板，并支持可选的JSX。

### 1、插值



