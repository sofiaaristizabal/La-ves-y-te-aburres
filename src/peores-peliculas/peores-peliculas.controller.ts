import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { CreatePeoresPeliculaDto } from './dto/create-peores-pelicula.dto';
import { UpdatePeoresPeliculaDto } from './dto/update-peores-pelicula.dto';

@Controller('peores-peliculas')
export class PeoresPeliculasController {
  constructor(private readonly peoresPeliculasService: PeoresPeliculasService) {}

  @Post()
  create(@Body() createPeoresPeliculaDto: CreatePeoresPeliculaDto) {
    return this.peoresPeliculasService.create(createPeoresPeliculaDto);
  }

  @Get()
  findAll() {
    return this.peoresPeliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peoresPeliculasService.findOne(id);
  }

  @Get('director/:id')
  async findByDirector(@Param('id') id: string) {
    return this.peoresPeliculasService.findByDirector(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeoresPeliculaDto: UpdatePeoresPeliculaDto) {
    return this.peoresPeliculasService.update(id, updatePeoresPeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peoresPeliculasService.remove(id);
  }
}
