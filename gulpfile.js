var gulp = require("gulp");
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Specific Task
function gulpSass() {
    return gulp
    .src(['./css/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
gulp.task(gulpSass);

// Run multiple tasks
gulp.task('start', gulp.series(gulpSass));