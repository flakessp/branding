var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    wrap         = require('gulp-wrap'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create(),
    manifest     = require('gulp-manifest');

var paths = {
    assets      : 'assets/branding',
    sass        : 'app/source/scss/**/*.scss',
    scripts     : 'app/source/js/**/*.js',
    html        : 'app/source/html/*.html',
    layout      : 'app/source/html/index.html',
    dev         : 'app/source/html/dev.html',
    production  : 'app/source/html/prod.html',
    output      : './'
};

gulp.task('serve', ['sass', 'dev'], function() {

    browserSync.init({
        server: paths.output
    });

    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.html, ['html-watch']);
});

gulp.task('html-watch', ['dev'], function(){browserSync.reload()});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['> 0%']
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

gulp.task('prod', ['manifest','sass'], function () {
    return gulp.src(paths.layout)
        .pipe(wrap({src: paths.production}))
        .pipe(gulp.dest(paths.output));
});

gulp.task('manifest', function(){
  gulp.src(['assets/branding/*'], { base: './' })
    .pipe(manifest({
      timestamp: true,
      cache: ['/brandings/_cacheAssets/application.css','/brandings/_cacheAssets/application.js'],
      network: ['*'],
      filename: 'app.manifest',
      exclude: 'app.manifest'
    }))
    .pipe(gulp.dest('./'));
});
