import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Repository } from "typeorm";
import { Task } from "./entities/task.entity";
export declare class TasksService {
    private repository;
    constructor(repository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<{
        id: number;
        title?: string;
        comments?: import("../comments/entities/comment.entity").Comment[];
    } & Task>;
    remove(id: number): Promise<void>;
}
