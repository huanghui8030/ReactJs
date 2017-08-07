var request = require('superagent');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    request
      .get('https://kl.chsi.com.cn/search/quickSearchKnow.action')
      .set('dataType', 'jsonp') 
      .send({ 
            keywords: '学信档案', 
            systemId: 'my' })
      .end(function(err, res){
        expect(res).to.be.an('object');
        done();
      });
  });
});
