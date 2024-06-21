import {
  IsOptional,
  IsString,
  IsInt,
  MinLength,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateSalaDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  nombre?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  filas?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  columnas?: number;
}
