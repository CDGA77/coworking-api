import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@ApiTags('reserva')
@UseFilters()
@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @ApiOperation({ summary: 'Crear una nueva reserva' })
  @Post()
  @UseInterceptors() 
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.create(createReservaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las reservas' })
  @Get()
  @UseInterceptors() 
  findAll() {
    return this.reservaService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una reserva por su ID' })
  @Get(':id')
  @UseInterceptors() 
  findOne(@Param('id') id: string) {
    return this.reservaService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizar una reserva por su ID' })
  @Put(':id')
  @UseInterceptors() 
  update(@Param('id') id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(+id, updateReservaDto);
  }

  @ApiOperation({ summary: 'Eliminar una reserva por su ID' })
  @Delete(':id')
  @UseInterceptors() 
  remove(@Param('id') id: string) {
    return this.reservaService.remove(+id);
  }
}
