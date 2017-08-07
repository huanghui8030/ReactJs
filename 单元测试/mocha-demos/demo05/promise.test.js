/**
 * ajax异步测试
 * 参考资料：
 *    [superagent官网](http://visionmedia.github.io/superagent/#test-documentation)
 *    [superagent API中文翻译](https://cnodejs.org/topic/5378720ed6e2d16149fa16bd)      
 */
var request = require('superagent') ;
var expect = require('chai').expect;
describe('promise.test.js - 异步测试', function() {
    
    it('测试head方法', function(done){  
      request
        .head('http://kl.chdi.com.cn/favicon.ico')  
        .end(function(err,res){  
            if (err || !res.ok) {
               console.log('返回错误，状态为：'+res.status);
            } else {
               console.log("返回成功："+res.status);
            }
            done()  
        })
    });

    it('测试get方法', function(done){  
      request
        //.get('http://kl.chdi.com.cn/wap/help/ckjjfa.jsp?id=konk1p0w2zv34mqn')
        .get('http://kl.chdi.com.cn/search/allSearch.action?keywords=身份证重复')
        .end(function(err,res){ 
            if (err || !res.ok) {
               console.log('返回错误，状态为：'+res.status);
            } else {
               console.log('返回成功：'+res.status);
               
               console.log('返回成功：'+res.body.o.knows.length);
               //console.log('获取内容为： ' + JSON.stringify(res.body));
            }
            done()  
        })
    }); 

    //返回403，服务端限制
    it('测试post方法', function(done){  
      request
        .post('http://kl.chdi.com.cn/search/allSearch.action')
        //.send({'keywords':'身份证重复'})
        .end(function(err,res){ 
            if (err || !res.ok) {
               console.log('返回错误，状态为：'+res.status);
            } else {
               console.log('获取内容为： '+ res.body.flag+'，一共多少条数据：'+res.body.o.knows.length)
               var content = JSON.stringify(res.body);
               console.log('全部内容： '+ content);
            }
            done()  
        })
    });  
});
