import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: 'Електронна адреса користувача'})
    @IsString({message: 'Повинно бути рядком'})
    @IsEmail({},{message: 'Не коректний email'})
    readonly email: string;

    @ApiProperty({example: 'password-example', description: 'Пароль користувача'})
    @IsString({message: 'Повинно бути рядком'})
    @Length(4, 16, {message: 'Пароль повинен мати від 4 до 16 символів'})
    readonly password: string;
}