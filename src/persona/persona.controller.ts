import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreateUsuarioDto } from './dto/create-persona.dto';
import { UpdateUsuarioDto } from './dto/update-persona.dto';

import { UsuarioEntity } from './entities/persona.entity';


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.personaService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.personaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.personaService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personaService.remove(+id);
  }
}
