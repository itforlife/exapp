import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm'
import { injectable } from 'inversify'
import {MinLength, IsEmail} from "class-validator";

@Entity()
@injectable()
export class User {
    @PrimaryGeneratedColumn() public id: number

    @Column() public firstName: string
    
    @IsEmail()
    @Index({ unique: true })
    @Column() public email: string

    @Column() public lastName: string
    @Column({nullable: true}) public age: number;

    @MinLength(6)
    @Column() public password: string

}
