import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private readonly repository;
    constructor(repository: Repository<Task>);
    create(createTaskInput: CreateTaskInput): Promise<CreateTaskInput & Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskInput: UpdateTaskInput): Promise<{
        id: number;
        title: string;
    } & Task>;
    remove(id: number): Promise<void>;
}
