import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateEspacioTrabajoDto {
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  fila: number;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  columna: number;

  @IsInt()
  @IsNotEmpty()
  id_sala: number;
}
