import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/crate-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('usuario')
@UseFilters()
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Crear un usuario' })
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un usuario por su ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizar un usuario por su ID' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @ApiOperation({ summary: 'Eliminar un usuario por su ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
