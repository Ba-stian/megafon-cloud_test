const webpack = require('webpack');
const fromRoot = require('./helpers/from-root');

const {entry, optimization} = require('./common.config');
const {babel, css, images} = require('./rules');
const {
		clean, html,
		css: cssPlugin,
		optimizeCss,
} = require('./plugins');

module.exports = {
		entry,
		output: {
				path: fromRoot('build'),
				filename: 'js/[name].js',
				chunkFilename: 'js/[name].js',
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
		devServer: {
				host: 'localhost',
				port: 8000,
				historyApiFallback: true,
		},
		plugins: [
				clean,
				cssPlugin,
				optimizeCss,
				html,
				new webpack.HotModuleReplacementPlugin(),
		],
		resolve: {
				extensions: ['.js', '.jsx'],
		},
};
