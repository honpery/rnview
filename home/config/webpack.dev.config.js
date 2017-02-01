/**
 * dev module config.
 */
const merge = require('webpack-merge');
const helpers = require('../helpers');
const common = require('./webpack.common.config');
const webpack = require('webpack');

module.exports = merge(common, {

    output: {
        path: helpers.root('build'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: 'source-map',

    // debug: true,

    devServer: {
        port: 9030,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        profile: true,
        displayModules: true,
        contentBase: 'build/',
        historyApiFallback: true,
        colors: true
    }

});