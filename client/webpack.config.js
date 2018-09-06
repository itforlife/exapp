const path = require('path');
const fs = require('fs');
const controllerFiles = fs.readdirSync(
    path.resolve(__dirname, 'src', 'controllers')
);

const controllerEntries = controllerFiles.reduce((entry, c) => {
    entry[path.basename(c, '.ts')] = path.resolve(
        __dirname,
        'src',
        'controllers',
        c
    );
    return entry;
}, {});

const config = {
    entry: controllerEntries,
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        stimulus: {
            root: 'Stimulus',
            commonjs2: 'stimulus',
            commonjs: 'stimulus',
        },
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, '..', 'node_modules')],
    },
    output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '..', 'server', 'public', 'assets', 'js'),
    },
};

module.exports = config;
