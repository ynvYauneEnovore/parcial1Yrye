
import { IsBoolean, IsInt, IsDate,IsDefined, IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUsuarioDto {

  
  @IsNotEmpty({ message: 'El campo ci no debe ser vacío' })
  @IsInt({ message: 'El campo ci debe ser un número entero' })
  ci: number;

  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'El campo primerApellido no debe ser vacío' })
  @IsString({ message: 'El campo primerApellido debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo primerApellido no debe ser mayor a 50 caracteres' })
  primerApellido: string;

  @IsNotEmpty({ message: 'El campo segundoApellido no debe ser vacío' })
  @IsString({ message: 'El campo segundoApellido debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo segundoApellido no debe ser mayor a 50 caracteres' })
  segundoApellido: string;

  @IsNotEmpty({ message: 'El campo fechaNacimiento no debe ser vacío' })
  @IsDate({ message: 'El campo fechaNacimiento debe ser de tipo fecha' })
  fechaNacimiento: Date;

}
