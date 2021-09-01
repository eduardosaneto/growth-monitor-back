import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import GeoPositions from "./GeoPositions";
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

  @OneToOne(() => GeoPositions)
  @JoinColumn()
  geo: GeoPositions;

  @OneToMany(() => UsersAddresses, ua => ua.address)
  userAddress: UsersAddresses[];
}
