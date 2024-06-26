import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SesionService } from './sesion.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sesion')
@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Post()
  create(@Body() createSesionDto: CreateSesionDto) {
    return this.sesionService.create(createSesionDto);
  }

  @Get()
  findAll() {
    return this.sesionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSesionDto: UpdateSesionDto) {
    return this.sesionService.update(+id, updateSesionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesionService.remove(+id);
  }
}
