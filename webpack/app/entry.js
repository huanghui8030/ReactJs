require('./module1');

let People = require('./js/es6-module');
let p = new People('Huanghui');
p.sayHi();

require('./css/main.scss');

var img = document.createElement('img');
img.src = require('./image/a.jpg');
document.body.appendChild(img);

