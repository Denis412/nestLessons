import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(createTaskInput: CreateTaskInput): Promise<CreateTaskInput & Task>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    updateTask(id: number, updateTaskInput: UpdateTaskInput): Promise<{
        id: number;
        title: string;
    } & Task>;
    removeTask(id: number): Promise<void>;
}
