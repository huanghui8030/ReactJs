//测试click时间
var assert = chai.assert;
describe('#click()', function() {

    
    it('调查/投票首页', function() {
        expect(getSecondIndex('survey/index.action',getFirstIndex('survey'))).to.be.equal(0);
    });
   
   
});