/**
 * @description gulp配置文件，整合css/js/images等自动化插件
 * @author huanghui8030@qq.com
 * @date 2016.08.08
 */
var gulp = require('gulp'),                     //本地安装gulp所用到的地方
    less = require('gulp-less'),                //less文件转为css
    autoprefixer = require('gulp-autoprefixer'),//css添加厂商前缀
    csslint = require('gulp-csslint'),          //检查css语法
    rename = require('gulp-rename'),            //重命名
    cssmin = require('gulp-clean-css'),         //压缩css
    watch = require('gulp-watch'),              //即时编译
    assetRev = require('gulp-asset-rev')        //添加版本号
    clean = require('gulp-clean');              //删除文件，做操作前先删除文件
var ArrAll = {
	lessDir:'src/css/less',    //需要解析的less文件目录
	cssDir:'src/css/res',      //生成的css目录
	cssminDir:'src/css/min' ,  //生成的min.css目录
	htmlDir:'src/html',         //html目录
	htmlminDir:'dist/html'
};   

//样式文件处理
gulp.task('testLess', function () {
    gulp.src([ArrAll.lessDir+'/*.less','!'+ArrAll.lessDir+'/_*.less']) //该任务针对的文件和不对其进行处理的文件
        .pipe(less()) //该任务调用的模块
        //.pipe(filter('**/*.css'))
        .pipe(autoprefixer({//加厂商前缀
            browsers: ['> 5%', 'ie 6-11','last 2 version'],
            cascade: true, //是否美化属性值 默认：true 
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(csslint())//检查css
        .pipe(assetRev())  //添加版本号
        .pipe(gulp.dest(ArrAll.cssDir))//生成css文件
        .pipe(rename({ suffix: '.min' }))//重新命名，添加后缀名
        .pipe(cssmin())    //压缩css
        .pipe(gulp.dest(ArrAll.cssminDir)); //生成压缩文件
});

//css代码检查
var postcss     = require('gulp-postcss'),
	reporter    = require('postcss-reporter'),
	stylelint   = require('stylelint');
gulp.task('cssLint', function() {

  // 检查规则
  var stylelintConfig = {
    "rules": {
      "block-no-empty": true,
	  "color-no-invalid-hex": true,
	  "declaration-colon-space-after": "always",
	  "declaration-colon-space-before": "never",
	  "function-comma-space-after": "always",
	//  "function-url-quotes": "double",
	  "media-feature-colon-space-after": "always",
	  "media-feature-colon-space-before": "never",
	 // "media-feature-name-no-vendor-prefix": true,
	  "max-empty-lines": 5,
	  "number-leading-zero": "never",
	  "number-no-trailing-zeros": true,
	  //"property-no-vendor-prefix": true,
	  "selector-list-comma-space-before": "never",
	  "selector-list-comma-newline-after": "always",
	  //"selector-no-id": true,  //Id是否能作为选择器
	  "string-quotes": "double",
	 //"value-no-vendor-prefix": true
    }
  }

  var processors = [
    stylelint(stylelintConfig),
    // Pretty reporting config
    reporter({
      clearMessages: true,
      throwError: false
    })
  ];

  return gulp.src(
      // 需要检查的css列表
      ['src/css/res/*.css']
    )
    .pipe(postcss(processors));
});

//html页面引用时加入版本号
gulp.task('htmlRev',function() {
    gulp.src([ArrAll.htmlDir+'/*.html'])
        .pipe(assetRev())
        .pipe(gulp.dest(ArrAll.htmlDir))
});

//即时编译文件文件
gulp.task('watch',function(){
	gulp.watch(ArrAll.lessDir+'/*.less',['testLess']);
	gulp.watch(ArrAll.lessDir+'/*.less',['cssLint']);
});

//默认任务
gulp.task('default',['testLess','cssLint','htmlRev'],function(){
	gulp.start('watch');
});

