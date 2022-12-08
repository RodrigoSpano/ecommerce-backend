import 'dotenv/config'

import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import JWTStrategy from './middlewares/passportJwt.js'
import indexRoute from './routes/index.routes.js';
import { MONGO_CONFIG } from './utilities/helpers.js';


const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongoUrl: process.env.ATLAS_URI, mongoOptions:MONGO_CONFIG }),
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