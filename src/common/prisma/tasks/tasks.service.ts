import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Task, Prisma } from '@prisma/client';
import { FindTaskParamsDTO } from './dto/find-task-params.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async get(
    TaskWhereUniqueInput: Prisma.TaskWhereUniqueInput,
  ): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: TaskWhereUniqueInput,
    });
  }

  async find(params: FindTaskParamsDTO): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const _take = take ? Number(take) : undefined;
    const _skip = skip ? Number(skip) : undefined;
    return this.prisma.task.findMany({
      skip: _skip,
      take: _take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  async updateTask(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> {
    const { where, data } = params;
    return this.prisma.task.update({
      data,
      where,
    });
  }

  async deleteTask(where: Prisma.TaskWhereUniqueInput): Promise<Task> {
    return this.prisma.task.delete({
      where,
    });
  }
}
