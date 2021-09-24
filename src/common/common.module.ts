import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { TasksService } from './prisma/tasks/tasks.service';

@Global()
@Module({
  providers: [PrismaService, TasksService],
  exports: [PrismaService, TasksService],
})
export class CommonModule {}
