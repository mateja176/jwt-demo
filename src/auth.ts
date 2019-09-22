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
      async (payload, done): Promise<void> => {
        try {
          done(null, payload.user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
