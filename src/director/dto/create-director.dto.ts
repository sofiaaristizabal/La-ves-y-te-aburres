import { IsString, IsDateString, MinLength, MinDate} from "class-validator";

export class CreateDirectorDto {


    @IsString()
    @MinLength(1)
    nombre:string;

    @IsDateString()
    fechaDeNacimiento:Date;

    @IsString()
    @MinLength(3)
    nacionalidad:string;

    @IsString()
    biografia:string;


}
