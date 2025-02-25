import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Asignature } from './asignatures.entity';
import { AsignaturesController } from './controller/projects.controller';
import { AsignaturesService } from './service/asignatures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Asignature]), UsersModule],
  controllers: [AsignaturesController],
  providers: [AsignaturesService],
  exports: [AsignaturesService], // Exporta el servicio si es necesario en otros módulos
})
export class AsignaturesModule {}
