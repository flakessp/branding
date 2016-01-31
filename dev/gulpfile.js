var gulp         = require('gulp'),
    jshint       = require('gulp-jshint'),
    sass         = require('gulp-sass'),
    wrap         = require('gulp-wrap'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create();


var paths = {
    styles: 'assets/source/styles/',
    css: 'assets/css/',
    sass: 'source/scss/**/*.scss',
    scripts: 'source/javascript/**/*.js',
    js: 'source/javascript/**/*.js',
    templates: 'templates/',
    html: 'source/*.html',
    output: '..'
};

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: paths.output
        }
    });
});

gulp.task('build-css', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('public/assets/stylesheets'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {
    gulp.watch(paths.js, ['jshint']);
    gulp.watch(paths.sass, ['build-css']);
});

gulp.task('copyHtml', function() {
    // copy any html files in source/ to public/
    gulp.src(paths.html).pipe(gulp.dest('..'));
});

gulp.task('serve', ['sass', 'dev'], function() {

    browserSync.init({
        server: ".."
    });

    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.html).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest("../assets/branding"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

//wrapping template
gulp.task('dev', function () {
    return gulp.src('source/index.html')
        .pipe(wrap({src: 'source/dev.html'}))
        .pipe(gulp.dest('..'));
});

gulp.task('prod', function () {
    return gulp.src('source/index.html')
        .pipe(wrap({src: 'source/prod.html'}))
        .pipe(gulp.dest('..'));
});