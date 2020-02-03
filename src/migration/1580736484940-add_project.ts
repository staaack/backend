import {MigrationInterface, QueryRunner} from "typeorm";

export class addProject1580736484940 implements MigrationInterface {
    name = 'addProject1580736484940'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "project"`, undefined);
    }

}
