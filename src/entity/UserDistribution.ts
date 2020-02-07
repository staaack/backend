import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserDistribution {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    daily_rate: number;

    @Column()
    education: number;

    @Column()
    bonus: number;

    @Column()
    telephone: number;

    @Column()
    internet: number;

    @Column()
    computer: number;

    @Column()
    office: number;

    @Column()
    car: number;

    @Column()
    gas: number;

    @Column()
    lunch_voucher: number;

    @Column()
    eco_voucher: number;

    @Column()
    research: number;

    @Column()
    marketing: number;

    @Column()
    salary: number;

    @Column()
    hr: number;

}
