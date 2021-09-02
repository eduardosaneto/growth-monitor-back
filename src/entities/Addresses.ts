import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import UsersAddresses from "./UsersAddresses";

@Entity("addresses")
export default class Addresses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  suite: string;

  @Column()
  city: string;

  @Column()
  zipCode: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @OneToMany(() => UsersAddresses, (ua) => ua.address)
  userAddress: UsersAddresses[];
}
