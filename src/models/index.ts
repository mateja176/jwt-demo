import { prop, Typegoose } from 'typegoose';

const tg = new Typegoose();

export class User {
  @prop({
    required: true,
    unique: true,
  })
  email: string;

  @prop({
    required: true,
  })
  password: string;
}

export const UserModel = tg.getModelForClass(User);
