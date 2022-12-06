import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/index.routes.js';
import passport from 'passport';
import JWTStrategy from './middlewares/passportJwt.js'

import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(passport.initialize())
passport.use(JWTStrategy)

app.use(indexRoute);

export default app;