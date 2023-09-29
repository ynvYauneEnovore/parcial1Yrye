import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-persona.dto';
import { UpdateUsuarioDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(
    createUsuarioDto: CreateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const existe = await this.usuarioRepository.findOneBy({
      nombre: createUsuarioDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException(`El usuario ${createUsuarioDto.nombre} ya existe.`);
    }

    const usuario: UsuarioEntity = new UsuarioEntity();
    usuario.ci = createUsuarioDto.ci;
    usuario.nombre = createUsuarioDto.nombre.trim();
    usuario.primerApellido = createUsuarioDto.primerApellido.trim();
    usuario.segundoApellido = createUsuarioDto.segundoApellido.trim();
    usuario.fechaNacimiento = createUsuarioDto.fechaNacimiento;
  

    const usuarioDB = await this.usuarioRepository.save(usuario);
    delete usuarioDB.nombre;
    return usuarioDB;
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOneBy({id});

    if (!usuario) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.usuarioRepository.findOneBy({id});

    if (!usuario) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuarioUpdate);
  }

  async remove(id: number) {
    const existe = await this.usuarioRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El usuario ${id} no existe.`);
    }

    return this.usuarioRepository.delete(id);
  }

 
}
