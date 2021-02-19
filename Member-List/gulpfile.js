const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

gulp.task("css", () =>{
    return gulp.src('scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream())
})

gulp.task("serve", () => {
    browserSync.init({
        server : {
            baseDir :'./'
        }
    });
    gulp.watch('./scss/**/*.scss', gulp.series(['css']))
    gulp.watch('./*.html').on('change',browserSync.reload)
})

gulp.task('default',gulp.series(['serve']))