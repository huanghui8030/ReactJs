var add = require('../demo/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
        
        expect(add(1,2)).to.be.equal(0);
    });

    it('任何数加0等于自身', function() {
        expect(add(1)).to.be.equal(1);
        expect(add()).to.be.equal(0);
        
    });
});