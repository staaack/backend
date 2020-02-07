import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    contact: string;

    @Column()
    company_id: string;
}
