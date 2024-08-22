import { Director } from 'src/director/entities/director.entity';
import {Column, Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity()
export class PeoresPelicula {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',  {
        nullable:false
    })
    titulo:string;

    @Column({
        default: new Date().getFullYear()
    })
    lanzamiento:number;

    @Column('text',  {
        nullable:false
    })
    genero:string;

    @Column('text')
    descripcion:string;

    @ManyToOne(()=>Director, (director)=>director.peoresPeliculas)
    director:Director;

}
