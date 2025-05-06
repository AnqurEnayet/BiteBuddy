import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './createSignup.dto';
import { Response } from 'express';

@Controller('signup')
export class SignupController {
    constructor(private readonly signupService: SignupService) { } //preferable as it provides the automatic dependency injection in module

    //Almost same service
    /*private readonly signupService: SignupService;

    constructor() {
        this.signupService = new SignupService();
    }*/

    @Post()
    async create(@Body() createSignupDto: CreateSignupDto, @Res() res: Response): Promise<void> {//could have used Promise<any> if wanted 
        const result= await this.signupService.create(createSignupDto);

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
