import { Test, TestingModule } from '@nestjs/testing';
import { TasksListController } from './tasks-list.controller';

describe('TasksListController', () => {
  let controller: TasksListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksListController],
    }).compile();

    controller = module.get<TasksListController>(TasksListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
