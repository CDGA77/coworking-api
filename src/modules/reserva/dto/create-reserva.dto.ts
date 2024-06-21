import { IsInt, IsDate, IsNotEmpty } from 'class-validator';

export class CreateReservaDto {
  @IsInt()
  @IsNotEmpty()
  readonly usuarioId: number;

  @IsInt()
  @IsNotEmpty()
  readonly espacioId: number;

  @IsInt()
  @IsNotEmpty()
  readonly sesionId: number;

  @IsDate()
  @IsNotEmpty()
  readonly fechaReserva: Date;
}
