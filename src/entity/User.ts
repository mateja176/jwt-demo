import { Column, Entity, ObjectIdColumn } from 'typeorm';

export class UserDto {
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;
}

@Entity()
export class User extends UserDto {
  @ObjectIdColumn()
  id: string;

  static create = (dto: UserDto) => {
    const user = new User();

    Object.entries(dto).forEach(([key, value]) => {
      user[key] = value;
    });

    return user;
  };
}
