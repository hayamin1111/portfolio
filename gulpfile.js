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

gulp.task('sass', function () {
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

gulp.task('html', function () {
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

gulp.task('serve', function () {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/*.html', gulp.series('html'));
  gulp.watch('./src/js/**/*.js', gulp.series('js')); 
});

gulp.task('default', gulp.series('sass', 'html', 'js', 'serve'));
// gulp.task("browserSyncTask", () => {
//   browserSync({
//     server: {
//       baseDir: "src", // ルートとなるディレクトリを指定
//     },
//   });

//   // srcフォルダ以下のファイルを監視
//   gulp.watch("src/**", function () {
//     browserSync.reload(); // ファイルに変更があれば同期しているブラウザをリロード
//   });
// });

//style.scssをタスクを作成する
// gulp.task("scss", ()  => {
//   //style.scssファイルを監視
//   return gulp.watch("./src/css/*.scss", () => {
//     ///style.scssファイルを取得
//     return (
//       gulp.src('./src/css/*.scss')
//       //pipeで1つ1つの処理を繋げる
//       //scssのコンパイルの実行
//       .pipe(
//         sass({
//           outputStyle: "expanded",
//         })
//         .on("error", sass.logError)
//       )
//       //css圧縮、リネーム
//       .pipe(cleanCSS())
//       .pipe(rename({
//         extname: '.min.css'
//       }))
//       //cssフォルダー以下に保存
//       .pipe(gulp.dest("dist/css/"))
//     );
//   });
// });

// gulp.task("js", ()  => {
//   //jsの圧縮、リネーム
//   return gulp.src('./src/js/*.js')
//   .pipe(uglify())
//   .pipe(rename({
//     extname: '.min.js'
//   }))
//   //jsフォルダー以下に保存
//   .pipe(gulp.dest('dist/js/'));
// });

// // HTMLファイルをdistディレクトリにコピー
// gulp.task("html", () => {
//   return gulp.src('./src/*.html')
//     .pipe(gulp.dest('dist/')); // distディレクトリに保存
// });

// gulp.task("default", gulp.series(gulp.parallel("scss", "js", "html")));
