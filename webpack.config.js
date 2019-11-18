const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'plugins/grid/plugin': './src/main/ts/Main.ts',
        'demo': './src/demo/ts/Demo.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'node_modules/tinymce/tinymce.min.js',
                to: 'tinymce.min.js'
            },
            {
                from: 'node_modules/tinymce/themes',
                to: 'themes'
            },
            {
                from: 'node_modules/tinymce/plugins',
                to: 'plugins'
            },
            {
                from: 'node_modules/tinymce/skins',
                to: 'skins'
            },
            {
                from: './src/demo/html/index.html',
                to: 'index.html'
            },
            {
                from: './src/main/style.css',
                to: 'plugins/grid/style.css'
            },
            {
                from: './src/main/langs',
                to: 'plugins/grid/langs'
            },
        ]),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
};