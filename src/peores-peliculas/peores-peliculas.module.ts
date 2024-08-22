import { Module } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPeliculasController } from './peores-peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PeoresPelicula} from './entities/peores-pelicula.entity';

@Module({
  controllers: [PeoresPeliculasController],
  providers: [PeoresPeliculasService],
  imports: [TypeOrmModule.forFeature([PeoresPelicula])]
})
export class PeoresPeliculasModule {}
