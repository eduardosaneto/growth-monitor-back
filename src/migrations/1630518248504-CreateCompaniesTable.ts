import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCompaniesTable1630518248504 implements MigrationInterface {
    name = 'CreateCompaniesTable1630518248504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "catchPhrase" character varying NOT NULL, "bs" character varying NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
