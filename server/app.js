/* eslint-disabed */
var createError = require('http-errors')
var express = require('express');
var bodyParser = require('body-parser')
// var path = require('path');

const cityRouter = require('./routes/city')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// 注册路由

app.use('/common', cityRouter)

app.use(function(req, res, next) {
  next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
})

module.exports = app
