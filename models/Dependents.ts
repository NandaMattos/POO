import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './image';

@Entity('dependents')
export default class Dependents {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    birthdate: number;

    @Column()
    kinship_degree: string;

    @Column()
    id_functionary: number;

    @OneToMany(() => Image, image => image.dependent, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'dependent_id' })
    images: Image[];
}