import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Director } from './entities/director.entity';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DirectorService {

  constructor (@InjectRepository(Director)
     private readonly directorRepository: Repository<Director>){

  }

  async create(createDirectorDto: CreateDirectorDto) {

    const director = this.directorRepository.create(createDirectorDto);
    await this.directorRepository.save(director);
    const {nombre, fechaDeNacimiento, nacionalidad, biografia} = director;
    return director;
  }

  async findAll() {

    const directores = await this.directorRepository.find({})
    return directores;
  }

  async findOne(id: string) {

    const  director = await this.directorRepository.findOneBy({ID:id});
    if(!director){
      throw new NotFoundException(`No se encontro el director #${id}`)
    }
    const {nombre, fechaDeNacimiento, nacionalidad, biografia} = director;
    return director;
  }

  async update(id: string, updateDirectorDto: UpdateDirectorDto) {

    const director = await this.directorRepository.preload({ID:id, ...updateDirectorDto});
    if(!director){
      throw new NotFoundException(`director #${id} no encontrado`);
    }
    const {nombre, fechaDeNacimiento, nacionalidad, biografia} = director;
    return director;
  }

  async remove(id: string) {

    const director = await this.directorRepository.delete({ID:id});
    return director;
  }
} 
