import express from 'express'
import cors from 'cors'
import Redis from './utils/redis.js';
import morganBody from "morgan-body";
import locationRouter from './routes/location.routes.js';

const redis = Redis.getObject();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
morganBody(app);
app.use(cors());
app.use(locationRouter);

app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    exitcode: 1,
    message: err.message
  });
});

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log("Listening on", port)
})