import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("companies")
export default class Companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  catchPhrase: string;

  @Column()
  bs: string;
}
