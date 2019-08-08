module.exports = {
	test: /\.(gif|png|jpe?g|svg)$/i,
	loaders: [
		{
			loader: 'file-loader',
			options: {
				name: 'img/[name].[ext]',
			}
		}
	]
};
