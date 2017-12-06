import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import webpack from 'webpack'

var users = require('./router/user.js');
/**
 * 数据库链接
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog') //连接本地数据库blog 

var db = mongoose.connection;

// 连接成功
db.on('open', function() {
    console.log('MongoDB Connection Successed');
});
// 连接失败
db.on('error', function() {
    console.log('MongoDB Connection Error');
});
//链接数据库完毕

// 引入history模块
import history from 'connect-history-api-fallback'

// 正式环境时，下面两个模块不需要引入
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../build/webpack.dev.conf'

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// 引入history模式让浏览器支持
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function(req, res) {
    res.sendFile('./views/register.html')
})
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
// will print stacktrace
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.send(err.message)
})

app.listen(4000)

export default app