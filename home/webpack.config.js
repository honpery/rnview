const path = require('path');
module.exports = require(path.join(__dirname, `./config/webpack.${process.env.NODE_ENV}.config`));