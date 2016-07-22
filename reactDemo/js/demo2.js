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
ReactDOM.render(
	<MyTitle title = {data}/>,
	document.getElementById('div1')
);
/*
 * getDefaultProps 方法可以用来设置组件属性的默认值
 *
 */
var TestProps = React.createClass({
	getDefaultProps:function(){
		return {
			title:'Hello getDefaultProps!'
		};
	},
	render:function(){
		return <h1>{this.props.title}</h1>;
	}
});
ReactDOM.render(
	<TestProps/>,
	document.getElementById('div2')
);