import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/userModel.js';

const jwtSecret = process.env.JWT_SECRET || 'mySecret'

const cookieExtractor = function (req) {
  let token = null; 
  if (req && req.cookies) token = req.cookies['myAccessToken']
  return token;
};

export default new JWTStrategy({
  jwtFromRequest: cookieExtractor,
  secretOrKey: jwtSecret,
}, 
  async (payload, done) => {
    try {
      const user = await User.findOne({_id: payload.id})
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