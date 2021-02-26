const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const prefix = require('gulp-autoprefixer')
const browser = require('browser-sync').create()

gulp.task('serve',() => {
    browser.init({
        notify:false,
        server :{
            baseDir:'./'
        }
    });
    gulp.watch('./views/**/*.pug',gulp.series(['html']))
    gulp.watch('./scss/**/*.scss',gulp.series(['css']))
    gulp.watch('./*.html').on('change',browser.reload)
})
gulp.task('html',() =>{
    return gulp.src('./views/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
})
gulp.task('css',()=>{
    return gulp.src('./scss/main.scss')
        .pipe(sass({outputStyle : 'compressed'}))
        .pipe(prefix())
        .pipe(gulp.dest('./'))
        .pipe(browser.stream())
})

gulp.task('default',gulp.series(['serve']))