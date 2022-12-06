import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/index.routes.js';

import 'dotenv/config';
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(passport.initialize())

app.use(indexRoute);

export default app;