import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    rate: number;

    @Column()
    onss: string;

    @Column()
    annual_bonus: number;

    @Column()
    eco_cheque: string;

    @Column()
    gsm: string;

    @Column()
    car: number;

    @Column()
    other_transport: number;

    @Column()
    onss_car: number;

    @Column()
    insurance: number;

    @Column()
    benefits: number;

}
