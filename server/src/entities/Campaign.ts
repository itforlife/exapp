import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Campaign {
    @PrimaryGeneratedColumn()
    public id: number
    @Column()
    public title: string
    @Column()
    public description: string
    @Column()
    public excerpt: string
    @Column()
    public coverImage: string
}
