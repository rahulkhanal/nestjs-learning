import { IsEmail, IsNotEmpty, IsString } from "class-validator";

// export interface AuthDto {
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}