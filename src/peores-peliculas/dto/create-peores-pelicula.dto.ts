import {IsString, IsInt, Min, Max, MinDate, MinLength, IsObject} from 'class-validator';
import { Director } from 'src/director/entities/director.entity';

export class CreatePeoresPeliculaDto {

    @IsString()
    @MinLength(1)
    titulo:string;

    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    lanzamiento:number;

    @IsString()
    @MinLength(3)
    genero:string;

    @IsString()
    descripcion:string;

    @IsObject()
    director:Director;

    
}
