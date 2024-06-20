import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EspacioTrabajoService } from './espacio-trabajo.service';
import { CreateEspacioTrabajoDto } from './dto/create-espacio-trabajo.dto';
import { UpdateEspacioTrabajoDto } from './dto/update-espacio-trabajo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Espaciotrabajo')
@Controller('espacio-trabajo')
export class EspacioTrabajoController {
  constructor(private readonly espacioTrabajoService: EspacioTrabajoService) {}

  @Post()
  create(@Body() createEspacioTrabajoDto: CreateEspacioTrabajoDto) {
    return this.espacioTrabajoService.create(createEspacioTrabajoDto);
  }

  @Get()
  findAll() {
    return this.espacioTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.espacioTrabajoService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEspacioTrabajoDto: UpdateEspacioTrabajoDto,
  ) {
    return this.espacioTrabajoService.update(+id, updateEspacioTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.espacioTrabajoService.remove(+id);
  }
}
