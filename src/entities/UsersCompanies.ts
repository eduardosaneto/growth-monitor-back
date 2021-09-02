import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Users from "./Users";
import Companies from "./Companies";

@Entity("users_companies")
export default class UsersCompanies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  companyId: number;

  @ManyToOne(() => Users, (u) => u.userCompany)
  user: Users;

  @ManyToOne(() => Companies, (c) => c.userCompany)
  company: Companies;
}
