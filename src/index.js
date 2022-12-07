import express from 'express';
import morgan from 'morgan';
import settings from './config/settings.js';
import indexRoute from './routes/index.routes.js';
import passport from 'passport';
import JWTStrategy from './middlewares/passportJwt.js'

import session from 'express-session';
import MongoStore from 'connect-mongo';

import 'dotenv/config';

const app = express();

app.use(session({
  secret: settings.SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongoUrl: settings.MONGO_URI, mongoOptions:settings.MONGO_CONFIG }),
  cookie:{
    maxAge: 60000
  }
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(passport.initialize())
app.use(passport.session())
passport.use(JWTStrategy)

app.use(indexRoute);

export default app;