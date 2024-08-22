import { PeoresPelicula } from "src/peores-peliculas/entities/peores-pelicula.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Director {

    @PrimaryGeneratedColumn('uuid')
    ID:string;

    @Column('text', {
        nullable:false
    })
    nombre:string;

    @Column()
    fechaDeNacimiento:Date;

    @Column('text')
    nacionalidad:string;

    @Column('text')
    biografia:string;

    @OneToMany(()=>PeoresPelicula, (peoresPelicula)=>peoresPelicula.director )
    peoresPeliculas:PeoresPelicula[]; 

}
