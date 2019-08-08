const gulp = require('gulp');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCss = require('gulp-uglifycss');

gulp.task('default', function () {
	return gulp.src('./sass/*.sass')
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 5 versions'],
			cascade: false,
		}))
		.pipe(gulp.dest('./css/'))
		.pipe(uglifyCss())
		.pipe(gulp.dest('./mincss/'))
		.pipe(livereload())
});



gulp.task('watch', function () {
		livereload.listen();
		gulp.watch('./sass/*.sass', gulp.parallel('default'));
	}
);
