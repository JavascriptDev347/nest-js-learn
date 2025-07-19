import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, PropertyType } from "typeorm";
import { PropertyFeature } from "./propertyFeature.entity";
import { User } from "./user.entity";
import { PropertyTypeEntity } from "./propertyType.entity";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        default: 0
    })
    price: number;

    // one to oneda birinchisi target ikkinchisi reverside 
    @OneToOne(() => PropertyFeature,
        (propertyFeature) => propertyFeature.property,
        { cascade: true })
    propertyFeature: PropertyFeature


    @ManyToOne(() => User, (user) => user.properties)
    @JoinColumn({
        name: "ownerId"
    })
    user: User;


    @ManyToMany(() => User, (user) => user.likedProperties)
    likedBy: User[]


    @ManyToOne(() => PropertyTypeEntity)
    type: PropertyTypeEntity;
}