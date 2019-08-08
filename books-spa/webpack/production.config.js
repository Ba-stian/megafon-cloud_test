const fromRoot = require('./helpers/from-root');

const { entry, optimization } = require('./common.config');

const { babel, css, images } = require('./rules');

const {
		clean,
		html,
		css: cssPlugin,
		optimizeCss,
} = require('./plugins');

module.exports = {
		entry,
		output: {
				path: fromRoot('build'),
				filename: 'js/[name].[chunkhash].js',
				chunkFilename: 'js/[name].[chunkhash].js',
				publicPath: '/',
		},
		optimization,
		module: {
				rules: [
						babel,
						css,
						images,
				],
		},
		plugins: {
				clean,
				cssPlugin,
				optimizeCss,
				html,
		},
		resolve: {
				extensions: ['.js', '.jsx',]
		},
};
