import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    signup() {
        return "I am signedup"
    }

    login() {
        return { msg: "I am loggedin" }
    }
}