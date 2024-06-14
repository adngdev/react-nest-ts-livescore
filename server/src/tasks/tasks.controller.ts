import { Body, Controller, Get, Next, Post, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { TasksService } from './tasks.service';

import { TasksInterface } from './interfaces/tasks.interface';

@Controller('/tasks')
export class TasksController{
    constructor(private readonly taskService: TasksService) {}

    @Get()
    findAll(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction): [] {
        return
    }

    @Post('/create')
    async createTask(
        @Body() taskData: TasksInterface
    ) {
        const { name, author_id, description } = taskData;

        return this.taskService.createTask({
            name,
            description,
            user: {
                connect: { id: author_id }
            }
        });
    }

}