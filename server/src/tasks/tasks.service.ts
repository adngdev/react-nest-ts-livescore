import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Task, Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
    constructor(private readonly prisma: PrismaService) {}

    async createTask(data: Prisma.TaskCreateInput) {
        return this.prisma.task.create({ data });
    };
}