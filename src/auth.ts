import { PassportStatic } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecret } from './config/jwt';

export const addJwtStrategy = (passport: PassportStatic): PassportStatic =>
  passport.use(
    new Strategy(
      {
        secretOrKey: jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (token, done): Promise<void> => {
        try {
          done(null, token.user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
