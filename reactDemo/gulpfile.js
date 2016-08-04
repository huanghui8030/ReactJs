//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),  //less文件转为css
    concat = require('gulp-concat'),//js文件合并
 	uglify = require('gulp-uglify'),//js压缩
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync').create();//浏览器监控，不用手动刷新页面
//less文件压缩
gulp.task('testLess', function () {
    gulp.src('css/less/styls.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
       // .pipe(filter('**/*.css'))
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径

//js合并
gulp.task('testConcat', function () {
    gulp.src('js/demo1/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('js'));
}); 
//js文件压缩 
gulp.task('testMinJs', function () {
    gulp.src('js/test.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//不用手动刷新页面
// 静态服务器
var reload    = browserSync.reload;

// 静态服务器 + 监听 less/html 文件
gulp.task('serve', ['testLess'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/less/*.less", ['testLess']);
    gulp.watch("*.html").on('change', reload);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('css/less/*.less', ['less']);
});
gulp.task('default', ['serve']);
//自定加入厂商前缀
var autoprefixer = require('gulp-autoprefixer');
gulp.task('testAutoFx', function () {
    gulp.src('css/styls.css')
        .pipe(autoprefixer({
            browsers: ['> 5%', 'ie 6-8'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('dist/css'));
});

//引用的文件加入版本号
var rev = require('gulp-rev-append');
gulp.task('testRev',function(){
    gulp.src('demo1.html')
        .pipe(rev())
        .pipe(gulp.dest('dist/html'));
});

//压缩css，并给css里面的url后面添加版本号
var cssmin = require('gulp-clean-css');
    //确保已本地安装gulp-make-css-url-version [cnpm install gulp-make-css-url-version --save-dev]
    cssver = require('gulp-make-css-url-version'); 
 
gulp.task('testCssmin', function () {
    gulp.src('css/*.css')
        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

//图片压缩
var imagemin = require('gulp-imagemin');
 
gulp.task('testImagemin', function () {
    gulp.src('images/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

//压缩html
var htmlmin = require('gulp-htmlmin');
 
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});
//var plugins = require('gulp-load-plugins')();
