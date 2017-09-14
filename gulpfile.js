var gulp=require('gulp');
var typescript=require('gulp-typescript');
var del=require('del');
var tsconfig=require('./tsconfig.json');
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
  return gulp.src(['./client/**/*.{html,css}','./client/components/login/*.{html,css}'])
  .pipe(gulp.dest('./dist/client')); 
  
});
gulp.task('compile-main',function(){
  return gulp.src(['./main.ts'])
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/'));
  
});

gulp.task('compile-models',function(){
  return gulp.src(['./models/**/*.ts'])
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/models'));
  
});




gulp.task('compile',['copy-html','compile-main','compile-models'],function(){
  return gulp.src(['./client/**/*.ts'])
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist/client')).pipe(browsersync.reload({stream:true}));


});

gulp.task('watch',['build','nodemon'],function()
{
  gulp.watch('./client/**/*.{css,html,ts}',['build']);
  gulp.watch('./main.ts',['build']); 

});


gulp.task('build',['compile']);
gulp.task('default',['build']);

