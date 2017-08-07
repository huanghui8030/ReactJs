var assert = chai.assert;

describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
    // 在执行所有的测试用例前 函数会被调用一次
  });

  after(function() {
    // runs after all tests in this block
    // 在执行完所有的测试用例后 函数会被调用一次
  });

  beforeEach(function() {
    // runs before each test in this block
     // 在执行每个测试用例前 函数会被调用一次
  });

  afterEach(function() {
    // runs after each test in this block
    // 在执行每个测试用例后 函数会被调用一次
  });

  // test cases
});