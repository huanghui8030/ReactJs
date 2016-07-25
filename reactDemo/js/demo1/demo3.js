//组件类的第一个字母必须大写，否则会报错
//另外，组件类只能包含一个顶层标签(例如h1)，否则也会报错。
//添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
var DemoMst = React.createClass({
  render:function(){
    return <h4>Hello,{this.props.name}</h4>;
  }
});
ReactDOM.render(
  <DemoMst name='我是一个自定义组件类，首字母大写' />,
  document.getElementById('div4')
);