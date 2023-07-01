import { CreateUserDto } from "./users/dto/create-user.dto";
import { UsersService } from "./users/users.service";
import { AuthService } from "./auth/auth.service";
export declare class AppController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./users/entities/user.entity").User>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
