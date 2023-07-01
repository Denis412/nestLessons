import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & import("./entities/task.entity").Task>;
    findAll(): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("./entities/task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        id: number;
        title?: string;
        comments?: import("../comments/entities/comment.entity").Comment[];
    } & import("./entities/task.entity").Task>;
    remove(id: string): Promise<void>;
}
