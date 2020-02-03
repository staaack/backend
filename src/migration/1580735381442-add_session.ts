import {MigrationInterface, QueryRunner} from "typeorm";

export class addSession1580735381442 implements MigrationInterface {
    name = 'addSession1580735381442'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "user_id" integer NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "session" ADD "user_id" character varying NOT NULL`, undefined);
    }

}
