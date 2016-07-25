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
