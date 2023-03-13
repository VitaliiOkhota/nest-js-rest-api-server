import {IsNumber, IsString} from 'class-validator';

export class AddRoleDto {
    @IsString({message: 'Повинно бути рядком'})
    readonly value: string;

    @IsNumber({}, {message: 'Повинно бути числом'})
    userId: number;
}