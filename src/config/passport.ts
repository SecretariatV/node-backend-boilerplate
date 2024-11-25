import passport from 'passport';
// import {Strategy as localStrategy} from 'passport-local';
import {Strategy as googleStrategy} from 'passport-google-oauth20';
import jwt from 'jsonwebtoken';

import {env} from './env';
import {logger} from './logger';
import {IProfile, IUser} from '../types';
import User from '../models/userModel';

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

export const passportConfig = () => {
  //   passport.use(
  //     new localStrategy({usernameField: 'email'}, async (email, password, done) => {
  //       try {
  //       } catch (error) {}
  //     }),
  //   );

  passport.use(
    new googleStrategy(
      {clientID: env.googleClientId, clientSecret: env.googleClientSecret, callbackURL: env.googleCallbackUrl},
      async (_token, _tokenSecret, profile: IProfile, done) => {
        try {
          const {emails} = profile;
          const email = emails?.[0].value;
          const confirmToken = jwt.sign({email}, env.jwtSecret, {expiresIn: '1h'});

          profile.confirmToken = confirmToken;
          const user = await User.findOneOrCreatedFromGoogle(profile);
          //   const backendUrl = env.backendUrl || 'http://localhost:5000';

          done(null, user);
        } catch (error: unknown) {
          if (error instanceof Error) {
            logger.error(`Google OAuth failed: ${error.message}`);
          } else {
            logger.error('An unknown error occured during Google OAuth');
          }
          done(error, false);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
