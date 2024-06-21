import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateReservaDto {
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  id_usuario?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  id_espacio?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  id_sesion?: number;

  @Type(() => Date)
  @IsOptional()
  fecha_reserva?: Date;
}
