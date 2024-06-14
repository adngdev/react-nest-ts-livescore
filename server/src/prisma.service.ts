import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
        console.log(`[${new Date(Date.now()).toUTCString()}] - Database Info: Database connected successfully`);
    }
}