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