import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import Users from './Users'
import Addresses from './Addresses'

@Entity('users_addresses')
export default class UsersAddresses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number

    @Column()
    addressId: number

    @ManyToOne(() => Users, u => u.userAddress)
    user: Users;

    @ManyToOne(() => Addresses, a => a.userAddress)
    address: Addresses;
}
