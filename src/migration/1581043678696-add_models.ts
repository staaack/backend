import {MigrationInterface, QueryRunner} from "typeorm";

export class addModels1581043678696 implements MigrationInterface {
    name = 'addModels1581043678696'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "timesheet" RENAME COLUMN "email" TO "user_id"`, undefined);
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "contact" character varying NOT NULL, "company_id" character varying NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "address" character varying NOT NULL, "vat" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "company_id" character varying NOT NULL, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "client_id" integer NOT NULL, "company_id" integer NOT NULL, "category" character varying NOT NULL, "amount" integer NOT NULL, "date" TIMESTAMP NOT NULL, "paid" boolean NOT NULL, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "department_id" integer NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_distribution" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "daily_rate" integer NOT NULL, "education" integer NOT NULL, "bonus" integer NOT NULL, "telephone" integer NOT NULL, "internet" integer NOT NULL, "computer" integer NOT NULL, "office" integer NOT NULL, "car" integer NOT NULL, "gas" integer NOT NULL, "lunch_voucher" integer NOT NULL, "eco_voucher" integer NOT NULL, "research" integer NOT NULL, "marketing" integer NOT NULL, "salary" integer NOT NULL, "hr" integer NOT NULL, CONSTRAINT "PK_a97183d9d27fda605a4cb4a8c5f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user_information" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "rate" integer NOT NULL, "onss" character varying NOT NULL, "annual_bonus" integer NOT NULL, "eco_cheque" character varying NOT NULL, "gsm" character varying NOT NULL, "car" integer NOT NULL, "other_transport" integer NOT NULL, "onss_car" integer NOT NULL, "insurance" integer NOT NULL, "benefits" integer NOT NULL, CONSTRAINT "PK_f7fa43b43a7a288d5c5a1fedfec" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "project" ADD "company_id" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "company_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "department_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "role_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "timesheet" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "timesheet" ADD "user_id" integer NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "timesheet" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "timesheet" ADD "user_id" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "department_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "company_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "company_id"`, undefined);
        await queryRunner.query(`DROP TABLE "user_information"`, undefined);
        await queryRunner.query(`DROP TABLE "user_distribution"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
        await queryRunner.query(`DROP TABLE "invoice"`, undefined);
        await queryRunner.query(`DROP TABLE "department"`, undefined);
        await queryRunner.query(`DROP TABLE "company"`, undefined);
        await queryRunner.query(`DROP TABLE "client"`, undefined);
        await queryRunner.query(`ALTER TABLE "timesheet" RENAME COLUMN "user_id" TO "email"`, undefined);
    }

}
