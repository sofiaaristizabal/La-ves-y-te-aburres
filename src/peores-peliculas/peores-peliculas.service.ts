import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeoresPeliculaDto } from './dto/create-peores-pelicula.dto';
import { UpdatePeoresPeliculaDto } from './dto/update-peores-pelicula.dto';
import { PeoresPelicula } from './entities/peores-pelicula.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PeoresPeliculasService {

  constructor(@InjectRepository(PeoresPelicula) 
     private readonly peoresPeliculaRepository: Repository<PeoresPelicula>){


  }

  async create(createPeoresPeliculaDto: CreatePeoresPeliculaDto) {

    const peoresPelicula = this.peoresPeliculaRepository.create(createPeoresPeliculaDto);
    await this.peoresPeliculaRepository.save(peoresPelicula);
    const {titulo, genero, lanzamiento, descripcion, director} = peoresPelicula;
    return peoresPelicula;
  }

  async findAll() {
    const peoresPeliculas = await this.peoresPeliculaRepository.find({});
    return peoresPeliculas;
  }

  async update(id: string, updatePeoresPeliculaDto: UpdatePeoresPeliculaDto) {
   
    const peoresPelicula = await this.peoresPeliculaRepository.preload({id:id, ...updatePeoresPeliculaDto });
    if(!peoresPelicula){
      throw new NotFoundException(`Peor pelicula #${id} no se hallo`);
    }
    const {titulo, genero, lanzamiento, descripcion, director} = peoresPelicula;
    return peoresPelicula;
  }

  async remove(id: string) {

    const peoresPelicula = await this.peoresPeliculaRepository.delete({id:id});
    return peoresPelicula;
  }

  async findOne(id: string) {
    const peorPelicula = await this.peoresPeliculaRepository.findOneBy({id:id});
    if(!peorPelicula){
      throw new NotFoundException(`Pelicula #${id} no se encontro`)
    }
    const {titulo, genero, lanzamiento, descripcion, director} = peorPelicula;
    return peorPelicula;
  }

  async findByDirector(directorId: string) {
    const peoresPeliculas = await this.peoresPeliculaRepository.find({
      where: {
        director: {
          ID: directorId
        },
      },
      relations: ['director']
    });
  
    if (!peoresPeliculas) {
      throw new NotFoundException(`Pelicula by Director #${directorId} not found`);
    }
  
    return peoresPeliculas;
  }
  
}
