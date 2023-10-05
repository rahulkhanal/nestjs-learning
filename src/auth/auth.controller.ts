import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {
        // this.authService.test()
    }

    @Post("signup")
    // signup(@Req() req: Request) {
    // signup(@Body('email', ParseIntPipe) email: string) {
    signup(@Body() dto: AuthDto) {
        console.log(dto);
        return this.authService.signup(dto)
    }

    @Get("login")
    login() {
        return this.authService.login()
    }
}