import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    department_id: number;

    @Column()
    title: string;

}
