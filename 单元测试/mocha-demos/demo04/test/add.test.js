/**
 * ES6用法：
 * $ cnpm install babel-core babel-preset-es2015 --save-dev
 * $ mocha --compilers js:babel-core/register
 */

import add from '../src/add.js';
import chai from 'chai';

let expect = chai.expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
