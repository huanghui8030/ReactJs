var should = require( 'should' );
var User   = require( '../js/User' );

// 描述 User 行为
describe( 'User', function () {

    // 在执行所有测试前, 执行 before(), 添加数据
    before( function () {
        User.save( 'luochuan' );
    } );

    // 在执行每个测试前, 执行 beforeEach(), 添加数据
    beforeEach( function () {
        User.save( 'hermit' );
    } );

    // 描述 User.save 行为
    describe( '#save', function () {

        // 保存 robert 用户成功.
        it( '保存 "robert" 成功.', function () {
            User.save( 'robert' );
        } );
    } );

    // 描述 User.contains 行为
    describe( '#contains', function () {

        // 应该存在 Hermit 用户
        it( '"Hermit" 已经存在', function () {
            User.contains( 'hermit' ).should.be.exactly( true );
        } );
        it( '"luochuan" 已经存在', function () {
            User.contains( 'luochuan' ).should.be.exactly( true );
        } );
        // 应该不存在 Martin 用户
        it( '"Martin" 不存在', function () {
            User.contains( 'Martin' ).should.be.exactly( false );
        } );
    } );

    // 在执行完每个测试后, 清空数据.
    afterEach( function () {
        User.delete( 'hermit' );
    } );


    // 在执行完每个测试后, 清空数据.
    after( function () {
        User.delete( 'luochuan' );
    } );
} );