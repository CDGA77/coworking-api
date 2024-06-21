import { IsInt, IsNotEmpty, Min, IsOptional } from 'class-validator';

export class UpdateEspacioTrabajoDto {
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @IsOptional()
  fila?: number;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @IsOptional()
  columna?: number;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  id_sala?: number;
}
