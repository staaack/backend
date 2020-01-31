import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Timesheet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    project_id: number;

    @Column()
    date: Date;

    @Column()
    hours: string;
}
