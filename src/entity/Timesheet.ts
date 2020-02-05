import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Timesheet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    project_id: number;

    @Column()
    date: Date;

    @Column()
    hours: string;
}
