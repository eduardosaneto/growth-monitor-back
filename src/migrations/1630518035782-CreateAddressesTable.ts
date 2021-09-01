import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAddressesTable1630518035782 implements MigrationInterface {
    name = 'CreateAddressesTable1630518035782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "suite" character varying NOT NULL, "city" character varying NOT NULL, "zipCode" character varying NOT NULL, "geoId" integer, CONSTRAINT "REL_49c35157842aec1a76537798fa" UNIQUE ("geoId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_49c35157842aec1a76537798faf" FOREIGN KEY ("geoId") REFERENCES "geo_positions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_49c35157842aec1a76537798faf"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
