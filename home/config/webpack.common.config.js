/**
 * webpack common config.
 */
const path = require('path');
const helpers = require('../helpers');
const HWP = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: helpers.root('src/main'),
        vendor: helpers.root('src/vendor'),
        polyfill: helpers.root('src/polyfill')
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },

    plugins: [
        new HWP({
            filename: 'index.html',
            template: helpers.root('src/index.html')
        })
    ]

};