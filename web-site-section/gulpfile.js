const gulp = require("gulp");
const sass = require("gulp-sass");
const browser  = require("browser-sync").create();

gulp.task('css', () => {
    return gulp.src('./scss/main.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./'))
        .pipe(browser.stream())
});

gulp.task('serve',() => {
    browser.init({
        server:{
            baseDir:'./'
        }
    })
    gulp.watch('./scss/**/*.scss',gulp.series(['css']))
    gulp.watch('./*.html').on('change',browser.reload)
})

gulp.task('default',gulp.series(['serve']))