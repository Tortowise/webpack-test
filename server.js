const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.listen(3000, () => console.log('Server has started on port 3000!!!'));