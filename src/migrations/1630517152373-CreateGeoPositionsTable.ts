import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGeoPositionsTable1630517152373 implements MigrationInterface {
    name = 'CreateGeoPositionsTable1630517152373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "geo_positions" ("id" SERIAL NOT NULL, "lat" integer NOT NULL, "lng" integer NOT NULL, CONSTRAINT "PK_cd45e3be4fda7b15b5ba8098cae" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "geo_positions"`);
    }

}
