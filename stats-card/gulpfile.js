const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

gulp.task('sass',function (){
    return gulp.src('./scss/main.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
})

gulp.task('serve',function (){
    browserSync.init({
        server :{
            baseDir : './'
        }
    });
    gulp.watch('./scss/**/*.scss',gulp.series(['sass']));
    gulp.watch('./*.html').on('change',browserSync.reload)
})

gulp.task('default',gulp.series(['serve']));