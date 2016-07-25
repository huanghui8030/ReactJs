//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),  //less文件转为css
    concat = require('gulp-concat'),//js文件合并
 	uglify = require('gulp-uglify');
//less文件压缩
gulp.task('testLess', function () {
    gulp.src('css/less/styls.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
 
//js文件压缩 
gulp.task('demo1', function () {
    gulp.src('js/demo1/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('js/demo1'));
});

//js文件压缩单个文件
gulp.task('jsmin', function () {
    gulp.src('js/demo1.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/demo1'));
});