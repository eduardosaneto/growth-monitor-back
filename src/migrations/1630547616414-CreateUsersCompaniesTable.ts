import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersCompaniesTable1630547616414 implements MigrationInterface {
    name = 'CreateUsersCompaniesTable1630547616414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_companies" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "companyId" integer NOT NULL, CONSTRAINT "PK_73b8247d09e25f36310a1bd67d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_companies" ADD CONSTRAINT "FK_f2cfccc84534204a3c23bb4fb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_companies" ADD CONSTRAINT "FK_7f8618ed886e173fb2135214c7d" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_companies" DROP CONSTRAINT "FK_7f8618ed886e173fb2135214c7d"`);
        await queryRunner.query(`ALTER TABLE "users_companies" DROP CONSTRAINT "FK_f2cfccc84534204a3c23bb4fb00"`);
        await queryRunner.query(`DROP TABLE "users_companies"`);
    }

}
