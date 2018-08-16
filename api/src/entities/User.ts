import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm'
import { MinLength, IsEmail } from 'class-validator'
import { Exclude } from 'class-transformer'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public firstName: string

    @IsEmail()
    @Index({ unique: true })
    @Column()
    public email: string

    @Column()
    public lastName: string
    @Column({ nullable: true })
    public age: number

    @Exclude()
    @MinLength(6)
    @Column()
    public password: string
}
