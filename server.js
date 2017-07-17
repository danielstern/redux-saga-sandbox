import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from "webpack-hot-middleware";

const compiler = webpack(webpackConfig);
const port = process.env.PORT || 8082;
const app = express();

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    inline:true
}));
app.use(webpackHotMiddleware(compiler, {
    'log': false,
    'path': '/__webpack_hmr',
    'heartbeat': 10 * 1000
}));
app.use(express.static('public'));

app.listen(port,()=>{
    console.info(`Generator sandbox is listening on port ${port}.`);
});