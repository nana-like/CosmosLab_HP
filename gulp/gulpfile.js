global.project = require('./package.json');

const gulp = require('gulp');
const path = require('path');
const del = require("del");
const sass = require('gulp-sass')(require('dart-sass'));
const browserSync = require("browser-sync");
const fileinclude = require("gulp-file-include");
const headerComment = require('gulp-header-comment');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const header = require('gulp-header');
const argv = require('yargs').argv;

const paths = project.paths;
const root = './../';
const files = {
  html: 'views/**/*.html',
  css: 'styles/**/*.scss',
  js: 'scripts/**/*.js',
  image: paths.src + '/images/**/*'
};

const comment = require('./config/headerComment');
let isBuildMode = false;
let isDistMode = false;
let langType = 'ko';

// HTML 처리
const html = () => {
  let stream = gulp
    .src([files.html, '!views/**/_*.*'], {
      cwd: path.resolve(__dirname, paths.src)
    })
    if (isBuildMode && langType === 'en' || isDistMode && langType === 'en') {
      stream = stream.pipe(rename({
        basename: 'en',
        extname: '.html'
      }))
    }
    stream.pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: {
        lang: langType
      }
    }))
  if (isBuildMode || isDistMode) {
    stream.pipe(htmlmin({ collapseWhitespace: true }))
  }
  stream = stream.pipe(gulp.dest(path.resolve(__dirname, paths.dist)))
  if (isDistMode) {
    stream = stream.pipe(gulp.dest(path.resolve(__dirname, root)))
  }
  stream.pipe(browserSync.stream());
  return stream;
};

// CSS 처리
const styleSheet = () => {
  const opts = {
    header: comment(project),
    sass: {
      outputStyle: 'expanded'
    }
  };

  if (isBuildMode || isDistMode) {
    opts.sass.outputStyle = 'compressed';
  }

  let stream = gulp
    .src(files.css, {
      cwd: path.resolve(__dirname, paths.src),
      // since: gulp.lastRun(styleSheet)
    })
    .pipe(sourcemaps.init())
    .pipe(sass(opts.sass)).on('error', sass.logError)
    .pipe(autoprefixer());

    if (!isBuildMode) {
      stream = stream.pipe(sourcemaps.write());
    }

  stream = stream.pipe(headerComment(opts.header))
    .pipe(gulp.dest(path.resolve(__dirname, paths.dist)))
  if (isDistMode) {
    stream = stream.pipe(gulp.dest(path.resolve(__dirname, root)))
  }
  stream = stream.pipe(browserSync.stream());

  return stream;
};

// 스크립트 처리
const scripts = () => {
  const opts = {
    header: comment(project)
  };
  let stream = gulp
    .src(files.js, {
      cwd: path.resolve(__dirname, paths.src),
    })
    .pipe(uglify())
    .pipe(concat('ui.js'))
    .pipe(rename('ui.min.js'))
    .pipe(headerComment(opts.header))
    .pipe(gulp.dest(path.resolve(__dirname, paths.dist)))
    if (isDistMode) {
      stream = stream.pipe(gulp.dest(path.resolve(__dirname, root)))
    }
    stream = stream.pipe(browserSync.stream());
    return stream;
}

// 이미지 처리
const image = () => {
  let stream = gulp.src(files.image)
  .pipe(imagemin())
  .pipe(gulp.dest(path.resolve(__dirname, paths.dist + '/images')))
  if (isDistMode) {
    stream = stream.pipe(gulp.dest(path.resolve(__dirname, root + '/images')))
  }
  return stream;
}

// 브라우저 동기화
const sync = () => {
  browserSync.init({
    port: project.port,
    server: {
      baseDir: path.resolve(__dirname, paths.dist)
    }
  });
};

// 감시
const watch = () => {
  gulp.watch(path.resolve(__dirname, paths.src, files.html), html);
  gulp.watch(path.resolve(__dirname, paths.src, files.css), styleSheet);
  gulp.watch(path.resolve(__dirname, paths.src, files.js), scripts);
}

// 파일 삭제
const clean = () => {
  const opts = {
    force: true
  };
  return new Promise((resolve, reject) => {
    del(paths.dist+'/*', opts);
    resolve();
  });
}

const tasks = {
  dev: gulp.series(
    gulp.parallel(
      sync,
      html,
      styleSheet,
      scripts,
      watch
    )
  ),
  build: gulp.series(
    gulp.parallel(
      html,
      styleSheet,
      scripts,
      image
    )
  ),
  sync: gulp.series(
    gulp.parallel(
      sync
    )
  )
}

const saveImage = gulp.series(
  gulp.parallel(
    image
  )
);

const cleanAll = gulp.series(
  gulp.parallel(
    clean
  )
);

gulp.task('image', async function () {
  saveImage();
});

gulp.task('clean', async function () {
  cleanAll();
});

gulp.task('default', async function () {
  langType = argv.lang || langType;
  tasks.sync();
  console.log("Sync Mode");
});

gulp.task('dev', async function () {
  langType = argv.lang || langType;
  tasks.dev();
  console.log("🔫 🤠 💥 Dev Mode ");
});

gulp.task('build', async function () {
  langType = argv.lang || langType;
  isBuildMode = true;
  tasks.build();
  console.log(`🛠 Build Mode`);
})

gulp.task('distribute', async function () {
  langType = argv.lang || langType;
  isDistMode = true;
  isBuildMode = true;
  tasks.build();
  console.log(`Distribute Mode`);
})
