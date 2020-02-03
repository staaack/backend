import {MigrationInterface, QueryRunner} from "typeorm";

export class userAdditionalFields1580721192186 implements MigrationInterface {
    name = 'userAdditionalFields1580721192186'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "title" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "title"`, undefined);
    }

}
