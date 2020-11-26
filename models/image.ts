import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Dependent from './Dependents';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Dependent, dependent => dependent.images)
    @JoinColumn({ name: 'dependent_id' })
    dependent: Dependent;

}