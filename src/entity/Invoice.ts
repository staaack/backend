import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_id: number;

    @Column()
    company_id: number;

    @Column()
    category: string;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @Column()
    paid: boolean;
}
