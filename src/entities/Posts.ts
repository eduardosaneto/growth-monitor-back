import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Users from "./Users";

@Entity("posts")
export default class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  userId: string;

  @ManyToOne(() => Users, (u) => u.post)
  user: Users;
}
