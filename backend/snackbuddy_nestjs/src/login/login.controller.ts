import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './createLoginDto';
import { Response } from 'express';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService){}

    @Post()
    async check(@Body() createLoginDto: CreateLoginDto, @Res() res: Response): Promise<void> {
        const result= await this.loginService.check(createLoginDto);

        try {
            if (result.used) {
                res.json(result);
              } else {
                res.json(result);
              }  
        }catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
        }
    }
}