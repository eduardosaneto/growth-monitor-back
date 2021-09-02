import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import UsersAddresses from "./UsersAddresses";
import UsersCompanies from "./UsersCompanies";
import Posts from "./Posts";
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

  @OneToMany(() => UsersAddresses, (ua) => ua.user)
  userAddress: UsersAddresses[];

  @OneToMany(() => UsersCompanies, (uc) => uc.user)
  userCompany: UsersCompanies[];

  @OneToMany(() => Posts, (u) => u.user)
  post: Posts[];
}
