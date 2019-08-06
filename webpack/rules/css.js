const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

const plugins = [
	autoprefixer()
];

if (process.env.NODE_ENV !== 'development') {
	plugins.push(cssnano({
		discardComments: {
			removeAll: true,
		},
	}));
}

module.exports = {
	test: /\.css$/,
	use: [
		isDevelopment ? 'style-loader' : MiniCssExtraPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				modules: {localIdentName: '[name]__[local]__[hash:base64:5]'},
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins,
			},
		},
	],
};

