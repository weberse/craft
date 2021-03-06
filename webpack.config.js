var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/app'
    ],
    output: {
        path: path.join(__dirname, '/static/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        //new webpack.DefinePlugin({
        //     'process.env': {
        //       'NODE_ENV': JSON.stringify('production')
        //     }
        //   })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: [path.join(__dirname, 'src'), path.join(__dirname, 'app')]
        }]
    },
    resolve: {
        root: path.join(__dirname, "src")
    }
};