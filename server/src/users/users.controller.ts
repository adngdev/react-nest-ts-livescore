import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './users.service';

import { UsersInterface } from './interface/users.interface';

@Controller('/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {};

    @Post('/create')
    async createUser(
        @Body() userData: UsersInterface
    ) {
        const { email, name, password } = userData;

        return this.usersService.createUser({
            email,
            name,
            password
        });
    }
}
