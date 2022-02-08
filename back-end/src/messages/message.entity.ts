import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity('messages')
export class MessageDataEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'text', nullable:false})
    name:string;

    @Column({type:'text', nullable:false})
    email:string;

    @Column(({type:'text', nullable:false}))
    text:string
}