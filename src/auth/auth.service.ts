import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
    async signup(dto: AuthDto) {
        // await ORM logic here
    }

    login() {
        return { msg: "I am loggedin" }
    }
}