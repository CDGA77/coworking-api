import { IsString, IsInt, MinLength, MaxLength, Min } from 'class-validator';

export class CreateSalaDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  nombre: string;

  @IsInt()
  @Min(1)
  filas: number;

  @IsInt()
  @Min(1)
  columnas: number;
}
