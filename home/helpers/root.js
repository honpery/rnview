/**
 * gen absolute root path.
 */
const path = require('path');
module.exports = filepath => path.join(__dirname, '../', filepath);