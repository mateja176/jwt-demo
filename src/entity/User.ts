import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}
