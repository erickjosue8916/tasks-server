import { Test, TestingModule } from '@nestjs/testing';
import { TasksCreateController } from './tasks-create.controller';

describe('TasksCreateController', () => {
  let controller: TasksCreateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksCreateController],
    }).compile();

    controller = module.get<TasksCreateController>(TasksCreateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
