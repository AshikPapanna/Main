var gulp=require('gulp');
var typescript=require('gulp-typescript');
var del=require('del');
var tsconfig=require('./client/tsconfig.json');
var sourcemaps=require('gulp-sourcemaps');
var browsersync=require('browser-sync').create();
var nodemon=require('gulp-nodemon');


gulp.task('nodemon',function(cb)
{
var started=false;
return nodemon({
  script:'server.js'

}).on('start',function(){
  if(!started)
    {
      cb(),
      started=true;
    }
}).on('restart',function()
{
  console.log('restarted');
}).on('crash',function()
{
  console.error('node crashed');
})
});
gulp.task('browser-sync',['nodemon'],function()
{
  browsersync.init(
    {
      
      proxy:{
        target:'http://localhost:3000',
        ws:true
        
      }
    }
  )
});

gulp.task('clean',function(){
    return del('./client/dist/**/*');
});

gulp.task('copy-html',['clean'],function(){
  return gulp.src('./client/app/**/*.html')
  .pipe(gulp.dest('./client/dist/app'));
  
});
gulp.task('compile-main',function(){
  return gulp.src('./client/main.ts')
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./client/dist/'));
  
})


gulp.task('compile',['copy-html','compile-main'],function(){
  return gulp.src('./client/app/**/*.ts')
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./client/dist/app')).pipe(browsersync.reload({stream:true}));


});

gulp.task('watch',['build','nodemon'],function()
{
  gulp.watch('./client/app/**/*.html',['build']);
  gulp.watch('./client/app/**/*.ts',['build']);
  gulp.watch('./client/main.ts',['build']); 

});


gulp.task('build',['compile']);
gulp.task('default',['build']);

