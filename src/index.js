import 'dotenv/config'

import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';
import compression from 'compression'
import passport from 'passport';
import session from 'express-session';
import express from 'express';
import morgan from 'morgan';
import http from 'http'
import { Server } from 'socket.io';

import JWTStrategy from './middlewares/passportJwt.js'
import indexRoute from './routes/index.routes.js';
import { MONGO_CONFIG } from './utilities/helpers.js';


const app = express();
export const server = http.createServer(app)
export const io = new Server(server)

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.ATLAS_URI,
      mongoOptions: MONGO_CONFIG,
    }),
    cookie: {
      maxAge: 6000000,
    },
  })
);

app.set('view engine', '.ejs')
app.set('views', './src/views')

app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public'))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(compression())

app.use(passport.initialize())
app.use(passport.session())
passport.use(JWTStrategy)

app.use(indexRoute);

export default app;