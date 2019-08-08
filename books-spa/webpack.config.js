const dev = require('./webpack/development.config');
const prod = require('./webpack/production.config');

let config;

if (process.env.NODE_ENV === 'production') {
		config = prod;
}  else {
		config = dev;
}

module.exports = config;
