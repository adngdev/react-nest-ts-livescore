import { Prisma } from '@prisma/client';

export interface TasksInterface extends Prisma.TaskCreateInput {
    author_id: string
}
