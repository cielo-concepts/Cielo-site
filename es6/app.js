"use strict";
import express      from 'express';
import path         from 'path';
import favicon      from 'serve-favicon';
import logger       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import fs           from 'fs';

import routes       from './routes/index';
import portfolio    from './routes/portfolio';

//using let
let app = express();


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../assets')));

app.use('/', routes);
app.use('/portfolio/:name', routes);

// using arrow syntax
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

let server_port = process.env.PORT || 5000;
app.set('port', server_port);

let server = app.listen(app.get('port'), () => console.log('Express is listening on port ' + server.address().port));

module.exports = app;