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
