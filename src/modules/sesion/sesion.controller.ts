import { Controller, Get, UseFilters } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
@ApiTags('Sesion')
@UseFilters()
@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @ApiOperation({ summary: 'Obtener las sesiones más ocupadas' })
  @Get('mas-ocupadas')
  getSesionesMasOcupadas() {
    return this.sesionService.getSesionesMasOcupadas();
  }

  @ApiOperation({ summary: 'Obtener las sesiones más disponibles' })
  @Get('mas-disponibles')
  getSesionesMasDisponibles() {
    return this.sesionService.getSesionesMasDisponibles();
  }
}
