const path = require('path');

const include = path.join(__dirname, 'src');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'spotifyWrapper',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include,
            },
        ],
    },
};
