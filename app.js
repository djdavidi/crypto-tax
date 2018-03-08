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

app.post("/api/gdax-prices", function(req, res) {
  console.log("here")

  // just collect all and store, looks to be legal
  // faster and easier on their servers
  // Store as {currency, date in Unix, USD value}
  // Cant do altcoin to altcoin though?
  // can change if storing
  // send here only string or range, and can chekc for which

  // takes array of arrays from the csv of date times that have been 
  // reduced and sorted and 

  // req.
	// res.send(arbitrator.getAllExchanges())
  // res.send("api pairs")

  // What if dont have though, like ltc only added later in year
  // What is source of truth?
  // round down to minutes so its contained
})

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