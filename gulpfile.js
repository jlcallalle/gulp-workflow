var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();


gulp.task('default', ['html', 'css', 'javascript'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/js/*.js", ['javascript']).on('change', browserSync.reload);
    gulp.watch("scss/**/*.scss", ['css']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("./*.html", ['html']);
});

gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'));
});

gulp.task('imagenes', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'))
});

gulp.task('javascript', function () {
   gulp.src('app/js/*.js')
     .pipe(uglify())
     .pipe(gulp.dest('app/js/dist'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('css', function(){
   //return gulp.src('scss/**/*.scss')
   return gulp.src('scss/main.scss')
       .pipe(sass())
       //.pipe(cssnano())
       .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.stream());

});



