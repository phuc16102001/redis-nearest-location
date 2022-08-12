import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import Redis from './utils/redis.js';

const redis = Redis.getObject();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("Listening on", port)
})