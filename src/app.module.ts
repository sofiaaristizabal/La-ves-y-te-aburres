import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeoresPeliculasModule } from './peores-peliculas/peores-peliculas.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorModule } from './director/director.module';

@Module({
  imports: [PeoresPeliculasModule, ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true

    }), DirectorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
