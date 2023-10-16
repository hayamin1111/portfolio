//gulpプラグインの読み込み
const gulp = require("gulp");
// browser-syncのプラグインの読み込み
const browserSync = require("browser-sync");
//cssの圧縮
const cleanCSS = require("gulp-clean-css");
//ファイル名の変更
const rename = require("gulp-rename");
//jsファイルの圧縮
const uglify = require("gulp-uglify");
//sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
//webP変換
const webp = require('gulp-webp');

gulp.task('sass', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
  return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task("js", ()  => {
  //jsの圧縮、リネーム
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    //jsフォルダー以下に保存
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/*.html', gulp.series('html'));
  gulp.watch('./src/js/**/*.js', gulp.series('js')); 
});

gulp.task('webp', () => {
  return gulp.src('./src/img/*.{jpg,jpeg,png}')
      .pipe(webp())
      .pipe(gulp.dest('./dist/img/'))
});
gulp.task('default', gulp.series('sass', 'html', 'js', 'webp', 'serve'));
