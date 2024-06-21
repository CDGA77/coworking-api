import { Controller, Get } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sesion')
@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Get('mas-ocupadas')
  getSesionesMasOcupadas() {
    return this.sesionService.getSesionesMasOcupadas();
  }

  @Get('mas-disponibles')
  getSesionesMasDisponibles() {
    return this.sesionService.getSesionesMasDisponibles();
  }
}
