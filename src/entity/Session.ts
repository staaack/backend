import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    token: string;

}
