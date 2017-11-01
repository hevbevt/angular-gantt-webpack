const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js',
        ganttDependencies: './ganttDependencies.js',
        vendor: [
            'moment-range',
            'angular',
            '@uirouter/angularjs',
            'angular-moment',
            'angular-native-dragdrop',
            'jsplumb',
        ],
    },
    // resolve: {
    //     alias: {
    //         'ElementQueries': path.resolve(__dirname, 'css-element-queries/src/ElementQueries.js'),
    //         'ResizeSensor': path.resolve(__dirname, 'css-element-queries/src/ResizeSensor.js'),
    //         'ui.tree': path.resolve(__dirname, 'angular-ui-tree/dist/angular_ui_tree.js'), 
    //     }
    // },
    plugins: [],
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    watch: true,
    module: {
        rules: [
            { 
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
            }, 
            
        ]
    }
};