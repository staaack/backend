import {MigrationInterface, QueryRunner} from "typeorm";

export class addTimesheet1580481984373 implements MigrationInterface {
    name = 'addTimesheet1580481984373'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "timesheet" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "project_id" integer NOT NULL, "date" TIMESTAMP NOT NULL, "hours" character varying NOT NULL, CONSTRAINT "PK_53c30fa094ae81f166955fb1036" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "timesheet"`, undefined);
    }

}
