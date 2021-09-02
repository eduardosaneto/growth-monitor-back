import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("users")
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  website: string;
}
