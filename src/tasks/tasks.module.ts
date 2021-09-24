import { Module } from '@nestjs/common';
import { TasksListController } from './tasks-list/tasks-list.controller';
import { TasksCreateController } from './tasks-create/tasks-create.controller';
import { TasksCreateService } from './tasks-create/tasks-create.service';
import { TasksListService } from './tasks-list/tasks-list.service';

@Module({
  controllers: [TasksListController, TasksCreateController],
  providers: [TasksCreateService, TasksListService]
})
export class TasksModule {}
