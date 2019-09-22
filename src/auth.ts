import { PassportStatic } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecret } from './config/jwt';

export const addJwtStrategy = (passport: PassportStatic) =>
  passport.use(
    new Strategy(
      {
        secretOrKey: jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (token, done) => {
        try {
          return done(null, token.user);
        } catch (error) {
          return done(error);
        }
      },
    ),
  );
