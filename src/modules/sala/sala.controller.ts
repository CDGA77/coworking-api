import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dtos/create-sala.dto';
import { UpdateSalaDto } from './dtos/update-sala.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('sala')
@Controller('sala')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @ApiOperation({ summary: 'Crear una nueva sala' })
  @Post()
  @UseInterceptors()
  create(@Body() createSalaDto: CreateSalaDto) {
    return this.salaService.create(createSalaDto);
  }

  @ApiOperation({ summary: 'Obtener todas las salas' })
  @Get()
  @UseInterceptors()
  findAll() {
    return this.salaService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una sala por su ID' })
  @Get(':id')
  @UseInterceptors()
  findOne(@Param('id') id: string) {
    return this.salaService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizar una sala por su ID' })
  @Put(':id')
  @UseInterceptors()
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto) {
    return this.salaService.update(+id, updateSalaDto);
  }

  @ApiOperation({ summary: 'Eliminar una sala por su ID' })
  @Delete(':id')
  @UseInterceptors()
  remove(@Param('id') id: string) {
    return this.salaService.remove(+id);
  }
}
