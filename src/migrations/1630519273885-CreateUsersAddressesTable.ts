import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersAddressesTable1630519273885 implements MigrationInterface {
    name = 'CreateUsersAddressesTable1630519273885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_addresses" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "addressId" integer NOT NULL, CONSTRAINT "PK_2f8d527df0d3acb8aa51945a968" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_addresses" ADD CONSTRAINT "FK_f37ee0c84e56c1124a44a0af14e" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_addresses" ADD CONSTRAINT "FK_59cf6caaabefb02ec3545734a6b" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_addresses" DROP CONSTRAINT "FK_59cf6caaabefb02ec3545734a6b"`);
        await queryRunner.query(`ALTER TABLE "users_addresses" DROP CONSTRAINT "FK_f37ee0c84e56c1124a44a0af14e"`);
        await queryRunner.query(`DROP TABLE "users_addresses"`);
    }

}
