const HtmlWebpackPlugin = require('html-webpack-plugin');
const fromRoot = require('../helpers/from-root');

module.exports = new HtmlWebpackPlugin({
		template: fromRoot('public/index.html'),
		favicon: fromRoot('public/favicon.ico'),
});
