import gulp from 'gulp';
import flatten from 'gulp-flatten';


gulp.task('pictures', () => (
	gulp.src([
		'app/blocks/**/*.png',
		'app/pages/**/*.png',
		'app/common/icons/**/*.png',
		'app/common/icons/**/*.jpg',
		'app/common/icons/**/*.svg'
	])
		.pipe(flatten())
		.pipe(gulp.dest('dist/assets/images'))
));
