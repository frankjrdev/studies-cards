import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [DatabaseModule, UsersModule, ProjectsModule, CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
