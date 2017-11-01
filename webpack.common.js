const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './app.js',
        ganttDependencies: './ganttDependencies.js',
        vendor: [
            'moment-range',
            '@uirouter/angularjs',
            'angular-moment',
            'angular-native-dragdrop',
            'jsplumb',
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            ngApp: 'app',
            title: 'test',
            template: './index.ejs',
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.html$/,
            loaders: ["html-loader"]
        }, {
            test: /\.s?css$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
            test: require.resolve('css-element-queries/src/ResizeSensor'),
            loader: 'script-loader'
        },
        {
            test: require.resolve('css-element-queries/src/ElementQueries'),
            loader: 'script-loader'
        },
        {
            test: require.resolve('moment'),
            loader: 'exports-loader?window.moment!script-loader'
        },
        {
            test: require.resolve('angular-gantt'),
            loader: 'script-loader'
        },]
    }
};