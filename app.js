const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');

const arbitrator = require('./arbitrator')
let cache = arbitrator.getAllExchanges();

app.get("/pairs", function(req, res) {
	res.send(cache)
})

app.get("*", function(req, res) {
	res.send("here")
})

// need to set up index for build

// let allExchangesData = arbitrator.getAllExchanges();
// 1. cache somehow? for every new guy that comes if
// it hasnt been 10 sec
// 2. Set up websockets for

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;