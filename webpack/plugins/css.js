const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = new MiniCssExtractPlugin({
		filename: `css/[name]${!isDev ? '.[chunkhash]' : ''}.css`,
		chunkFilename: `css/[name]${!isDev ? '.[chunkhash]' : ''}.css`,
});
