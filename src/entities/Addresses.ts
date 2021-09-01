import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import GeoPositions from "./GeoPositions";

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
}
