import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from '../../users/service/users.service';
import { AsignaturesService } from '../service/asignatures.service';

@Controller('asignatures')
export class AsignaturesController {
  constructor(
    private readonly asignaturesService: AsignaturesService,
    private readonly usersService: UsersService,
  ) {}

  @ApiOperation({ summary: 'Create new asignature' })
  @ApiResponse({ status: 201, description: 'Proyecto creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Post()
  async createAsignature(
    @Body()
    body: {
      name: string;
      description: string;
      isPublic: boolean;
      ownerId: number;
    },
  ) {
    const owner = await this.usersService.getUserById(body.ownerId);
    return this.asignaturesService.createAsignature(
      body.name,
      body.description,
      body.isPublic,
      owner,
    );
  }

  @ApiOperation({ summary: 'Get asignature by userId' })
  @ApiResponse({ status: 201, description: 'Proyectos obtenidos exitosamenet' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @Get(':userId')
  async getAsignatures(@Param('userId') userId: number) {
    return this.asignaturesService.getAsignaturesByUser(userId);
  }
}
