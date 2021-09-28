import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { FindTaskParamsDTO } from 'src/common/prisma/tasks/dto/find-task-params.dto';
import { TasksListService } from './tasks-list.service';

@Controller('tasks-list')
export class TasksListController {
  constructor(private readonly listService: TasksListService) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  async list(@Query() params: FindTaskParamsDTO) {
    const tasks = await this.listService.main(params);
    return tasks;
  }
}
