import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';

@Module({
  controllers: [DirectorController],
  providers: [DirectorService],
  imports:[TypeOrmModule.forFeature([Director])]
})
export class DirectorModule {}
