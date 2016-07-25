var gulp = require('gulp');
gulp.task('default',function(){
    console.log('hello world');
});
gulp.src('js/common/react.js')
    .pipe(gulp.dest('build'));