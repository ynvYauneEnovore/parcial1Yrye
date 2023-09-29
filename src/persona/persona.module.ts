import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { UsuarioController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [PersonaService],
  exports: [PersonaService],
})
export class UsuarioModule {}
