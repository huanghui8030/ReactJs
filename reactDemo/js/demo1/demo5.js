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