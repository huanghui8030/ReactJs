var add = require('../add.js');
var expect = require('chai').expect;

describe('test/add.test.js-- 加法函数的测试', function() {
  it('1 加 1 等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
  it('1 加 2 不等于 2', function() {
    expect(add(1, 2)).to.not.equal(2);
  });
  it('3 加 2 不等于 2', function() {
    expect(add(3, 2)).to.not.equal(2);
  });
});

describe('Array--expect方法', function() {
  describe('测试indexOf()', function() {
    it('不包含时，返回-1', function() {
      expect([1,2,3].indexOf(5)).to.be.equal(-1);
      expect([1,2,3].indexOf(0)).to.be.equal(-1);
    });
  });
});

var assert = require('chai').assert;
describe('Array-assert方法', function() {
  describe('测试indexOf()', function() {
    it('不包含时，返回-1', function() {
      assert.equal(-1, [1,2,3].indexOf(9));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});



