import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PropertyTypeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    value: string;
}