import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddressesTable1630546413325 implements MigrationInterface {
    name = 'CreateAddressesTable1630546413325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "suite" character varying NOT NULL, "city" character varying NOT NULL, "zipCode" character varying NOT NULL, "lat" character varying NOT NULL, "lng" character varying NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
