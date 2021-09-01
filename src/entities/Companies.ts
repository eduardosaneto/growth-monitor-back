import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import UsersCompanies from "./UsersCompanies";

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

  @OneToMany(() => UsersCompanies, (uc) => uc.company)
  userCompany: UsersCompanies[];
}
