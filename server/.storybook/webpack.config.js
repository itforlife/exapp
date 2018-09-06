const path = require('path');
const babelLoader = path.resolve('./node_modules/babel-loader');
const npmPackage = require('../../package.json');
const alias = Object.keys(npmPackage._moduleAliases).reduce((acc, k) => {
    acc[k] = path.resolve(__dirname, '..', '..', npmPackage._moduleAliases[k]);
    return acc;
}, {});
// console.log(JSON.stringify(alias));

const config = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [babelLoader, 'ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [babelLoader],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: alias,
    },
    output: {
        path: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
};

module.exports = config;
