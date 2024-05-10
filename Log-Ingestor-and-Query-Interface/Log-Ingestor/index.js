import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import logRouter from './features/log/log.routes.js';

const app = express();

app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, *');
  // res.header('Access-Control-Allow-Methods', '*');

  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method == 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/logs', logRouter);

export default app;
