import {
  Controller,
  Get,
  Param,
  Query,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { EspacioTrabajoService } from './espacio-trabajo.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Espacio Trabajo')
@UseFilters()
@Controller('espacio-trabajo')
export class EspacioTrabajoController {
  constructor(private readonly espacioTrabajoService: EspacioTrabajoService) {}

  @ApiOperation({ summary: 'Obtener todos los espacios de trabajo' })
  @Get()
  @UseInterceptors() // Aplicar el interceptor aquí si es necesario
  getAllEspacios() {
    return this.espacioTrabajoService.getAllEspacios();
  }
  @ApiOperation({ summary: 'Obtener espacios de trabajo disponibles' })
  @Get('disponibles')
  @UseInterceptors() // Aplicar el interceptor aquí
  getEspaciosDisponibles(
    @Query('salaId') salaId: number,
    @Query('sesionId') sesionId: number,
  ) {
    return this.espacioTrabajoService.getEspaciosDisponibles(salaId, sesionId);
  }

  @ApiOperation({ summary: 'Obtener espacios de trabajo ocupados' })
  @Get('ocupados')
  @UseInterceptors() // Aplicar el interceptor aquí
  getEspaciosOcupados(
    @Query('salaId') salaId: number,
    @Query('sesionId') sesionId: number,
  ) {
    return this.espacioTrabajoService.getEspaciosOcupados(salaId, sesionId);
  }

  @ApiOperation({
    summary: 'Obtener espacios de trabajo asignados a un usuario',
  })
  @Get('usuario/:id')
  @UseInterceptors() // Aplicar el interceptor aquí
  getEspaciosPorUsuario(@Param('id') id: number) {
    return this.espacioTrabajoService.getEspaciosPorUsuario(id);
  }

  @ApiOperation({
    summary: 'Obtener espacios de trabajo asignados a una sesión',
  })
  @Get('sesion/:id')
  @UseInterceptors() // Aplicar el interceptor aquí
  getEspaciosPorSesion(@Param('id') id: number) {
    return this.espacioTrabajoService.getEspaciosPorSesion(id);
  }
}
