require('../css/style.css');
require('../css/mainLess.less');
//require('http://t4.chei.com.cn/common/jquery/2.1.1/jquery.min.js');
document.write(require('./content.js'));
var img = document.createElement("img");
img.src = require("../images/sao.png");
document.body.appendChild(img);

//var jQuery = require('jquery');

$(function(){
	alert(11);

})