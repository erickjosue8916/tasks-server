import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { FindTaskParamsDTO } from 'src/common/prisma/tasks/dto/find-task-params.dto';
import { TasksService } from '../../common/prisma/tasks/tasks.service';
@Injectable()
export class TasksListService {
  constructor(private readonly taskService: TasksService) {}

  async main(params: FindTaskParamsDTO): Promise<Task[]> {
    const tasks = await this.taskService.find(params);
    return tasks;
  }
}
