import { Column } from 'typeorm';

export class User {
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
