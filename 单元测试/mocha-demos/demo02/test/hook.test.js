var should = require( 'should' );
var User   = require( '../js/User' );

// 描述 User 行为
describe( 'User-hook.test.js', function () {

    // 在执行所有测试前, 执行 before(), 添加桩数据
    before( 'Before all tests.', function () {
        User.save( 'hermit' );
    } );

    // 在执行每个测试前, 执行 beforeEach(), 添加桩数据
    beforeEach( 'Before each test case.', function () {
    } );

    // 描述 User.save 行为
    describe( '#delete', function () {

        // 删除 hermit 用户成功.
        it( 'Delete user successfully.', function () {
            User.delete( 'hermit' );
        } );
    } );

    // 在执行完每个测试后, 清空桩数据.
    afterEach( 'After each test case.', function () {
    } );

    // 在执行完每个测试后, 清空桩数据.
    after( 'After all tests.', function () {
        User.delete( 'hermit' );
    } );
} );