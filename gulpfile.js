var gulp=require('gulp');
var typescript=require('gulp-typescript');
var del=require('del');
var tsconfig=require('./client/tsconfig.json');
var sourcemaps=require('gulp-sourcemaps');

gulp.task('clean',function(){
    return del('./client/dist/**/*');
});

gulp.task('copy-html',function(){
  return gulp.src('./client/app/**/*.html')
  .pipe(gulp.dest('./client/dist/app'))
});
gulp.task('compile-main',function(){
  return gulp.src('./client/main.ts')
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./client/dist/'));
})


gulp.task('compile',['clean','compile-main','copy-html'],function(){
  return gulp.src('./client/app/**/*.ts')
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./client/dist/app'));

});


gulp.task('build',['compile']);
gulp.task('default',['build']);

