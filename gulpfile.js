//gulpプラグインの読み込み
const gulp = require("gulp");
//cssの圧縮
const cleanCSS = require("gulp-clean-css");
//ファイル名の変更
const rename = require("gulp-rename");
//jsファイルの圧縮
const uglify = require("gulp-uglify");
//sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));

//style.scssをタスクを作成する
gulp.task("scss", ()  => {
  //style.scssファイルを監視
  return gulp.watch("./src/css/*.scss", () => {
    ///style.scssファイルを取得
    return (
      gulp.src('./src/css/*.scss')
      //pipeで1つ1つの処理を繋げる
      //scssのコンパイルの実行
      .pipe(
        sass({
          outputStyle: "expanded",
        })
        .on("error", sass.logError)
      )
      //css圧縮、リネーム
      .pipe(cleanCSS())
      .pipe(rename({
        extname: '.min.css'
      }))
      //cssフォルダー以下に保存
      .pipe(gulp.dest("dist/css/"))
    );
  });
});

gulp.task("js-min", ()  => {
  //jsの圧縮、リネーム
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  //jsフォルダー以下に保存
  .pipe(gulp.dest('dist/js/'));
});

// HTMLファイルをdistディレクトリにコピー
gulp.task("html", () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('dist/')); // distディレクトリに保存
});

gulp.task("default", gulp.series(gulp.parallel("scss", "js-min", "html")));
