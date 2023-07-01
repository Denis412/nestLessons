import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
export declare class UsersService {
    private repository;
    constructor(repository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    login(createUserDto: CreateUserDto): Promise<boolean>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        first_name?: string;
        last_name?: string;
        password?: string;
        email?: string;
    } & User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
