import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    title: string;

    @Column()
    password: string;

    @Column()
    company_id: number;

    @Column()
    department_id: number;

    @Column()
    role_id: number;

}
