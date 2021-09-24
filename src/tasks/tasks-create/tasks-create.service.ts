import { Injectable } from '@nestjs/common';
import { TasksService } from 'src/common/prisma/tasks/tasks.service';
import { TaskCreateDTO } from './dto/task-create.dto';

@Injectable()
export class TasksCreateService {
  constructor(private readonly taskService: TasksService) {}

  async main(payload: TaskCreateDTO) {
    const result = await this.taskService.createTask(payload);
    return result;
  }
}
