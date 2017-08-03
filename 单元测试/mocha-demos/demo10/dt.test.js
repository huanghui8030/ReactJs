
//var expect = chai.expect;
var assert = chai.assert;
describe('获取二级菜单选中的序列号getSecondIndex方法', function() {

    /*
    普通方法
    it('调查/投票首页', function() {
        expect(getSecondIndex('survey/index.action',getFirstIndex('survey'))).to.be.equal(0);
    });
    it('调查/投票-职业调查', function() {
        expect(getSecondIndex('survey/zycp/nl',getFirstIndex('survey'))).to.be.equal(1);
    });
    */
   
    var tests = [
        {first:'gjhz',index: 0, url:'gjhz/index.action' },
        {first:'gjhz',index: 1, url:'gjhz/utf/index.action' },
        {first:'gjhz',index: 0, url:'gjhz/apply.action' },
    ];

    tests.forEach(function(test) {
        it('当前链接为：'+ test.url +'一级栏目： ' + test.first + '，二级栏目：' +test.index, function() {
          var res = getSecondIndex(test.url,getFirstIndex(test.first));
          assert.equal(res, test.index);
        });
    });
});