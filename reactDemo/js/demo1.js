ReactDOM.render(
	<h1>Hello, React!</h1>,
	 document.getElementById('div1')
);
//数组解析，这里必须用一个父元素（例如ul）包裹起来
var names = ['张三','李四','王五'];
ReactDOM.render(
  <ul>
    {
      names.map(function(name){
        return <li>Hello,{name}!</li>
      })
    }
  </ul>,
  document.getElementById('div2')
);

//将数组依次输出
var arr=[
    <h3>看到区别了啦</h3>,
    <h3>这是一个数组，依次解析</h3>
]; 
ReactDOM.render(
  <div>hi，{arr}</div>,
  document.getElementById('div3')
);

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

//this.props.children
//this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性
var NameLists = React.createClass({
  render:function(){
    return (
      <ol>
      {
        React.Children.map(this.props.children,function(child){
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});
ReactDOM.render(
  <NameLists>
    <span>Jack</span>
    <span>Luce</span>
  </NameLists>,
  document.getElementById('div5')
); 

//定义一个按钮，点击按钮的时候div内容变化为MyTitle
var Btn = React.createClass({
	btnClick:function(){
		//alert(1);
		ReactDOM.render(
			<MyTitle title = {data}/>,
			document.getElementById('div1')
		);
	},
	render:function(){
		return(
			<input type='button' value='下一页' onClick={this.btnClick}/>
		);
	}
});
ReactDOM.render(
	<Btn />,
	document.getElementById('div6')
);
/**
 * PropTypes属性，用来验证组件示例的属性是否符合要求。
 * Mytitle组件有一个title属性。PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。
 */
var MyTitle = React.createClass({
	propTypes:{
		title: React.PropTypes.string.isRequired
	},
	render:function(){
		return <h1>{this.props.title}</h1>;
	}
});
var data = 'propTypes设置title必须为string类型';

