var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    wrap         = require('gulp-wrap'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create();

var paths = {
    assets      : 'assets/branding',
    sass        : 'app/source/scss/**/*.scss',
    scripts     : 'app/source/js/**/*.js',
    html        : 'app/source/html/*.html',
    layout      : 'app/source/html/index.html',
    dev         : 'app/source/html/dev.html',
    production  : 'app/source/html/prod.html',
    output      : ''
};

gulp.task('serve', ['sass', 'dev'], function() {

    browserSync.init({
        server: paths.output
    });

    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.html).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(paths.assets))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('dev', function () {
    return gulp.src(paths.layout)
        .pipe(wrap({src: paths.dev}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('prod', function () {
    return gulp.src(paths.layout)
        .pipe(wrap({src: paths.production}))
        .pipe(gulp.dest(paths.output));
});