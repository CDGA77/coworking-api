import { Controller, Get, Param, Query } from '@nestjs/common';
import { EspacioTrabajoService } from './espacio-trabajo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Espacio Trabajo')
@Controller('espacio-trabajo')
export class EspacioTrabajoController {
  constructor(private readonly espacioTrabajoService: EspacioTrabajoService) {}

  @Get('disponibles')
  getEspaciosDisponibles(
    @Query('salaId') salaId: number,
    @Query('sesionId') sesionId: number,
  ) {
    return this.espacioTrabajoService.getEspaciosDisponibles(salaId, sesionId);
  }

  @Get('ocupados')
  getEspaciosOcupados(
    @Query('salaId') salaId: number,
    @Query('sesionId') sesionId: number,
  ) {
    return this.espacioTrabajoService.getEspaciosOcupados(salaId, sesionId);
  }

  @Get('usuario/:id')
  getEspaciosPorUsuario(@Param('id') id: number) {
    return this.espacioTrabajoService.getEspaciosPorUsuario(id);
  }

  @Get('sesion/:id')
  getEspaciosPorSesion(@Param('id') id: number) {
    return this.espacioTrabajoService.getEspaciosPorSesion(id);
  }
}
