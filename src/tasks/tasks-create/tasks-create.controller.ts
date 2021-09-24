import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TaskCreateDTO } from './dto/task-create.dto';
import { TasksCreateService } from './tasks-create.service';

@Controller('tasks-create')
export class TasksCreateController {
  constructor(private readonly taskCreateService: TasksCreateService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTask(@Body() body: TaskCreateDTO) {
    const result = await this.taskCreateService.main(body);
    return result;
  }
}
