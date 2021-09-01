import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("geo_positions")
export default class GeoPositions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  lng: number;
}
