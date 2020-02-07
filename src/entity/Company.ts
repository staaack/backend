import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    address: string;

    @Column()
    vat: string;
}
