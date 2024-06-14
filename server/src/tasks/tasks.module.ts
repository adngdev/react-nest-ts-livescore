import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [TasksController],
    providers: [TasksService, PrismaService],
})

export class TasksModule {}
