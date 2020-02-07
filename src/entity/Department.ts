import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    company_id: string;
}
