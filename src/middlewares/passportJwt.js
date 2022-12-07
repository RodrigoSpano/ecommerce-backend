import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import settings from '../config/settings.js';
import User from '../models/userModel.js';

export default new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: settings.SECRET
}, 
  async (payload, done) => {
    try {
      const user = await User.findById(payload.id)
      if(!user) return done(null, false)
      return done(null, user)
    } catch (error) {
      return done(error)
    }
  } 
)

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});