import { UsersService } from "./users.service";
import { AuthService } from "src/auth/auth.service";
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
}
