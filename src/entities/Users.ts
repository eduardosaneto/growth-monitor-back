import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import UsersAddresses from "./UsersAddresses";

@Entity("users")
export default class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  website: string;

  @OneToMany(() => UsersAddresses, ua => ua.user)
  userAddress: UsersAddresses[];
}
