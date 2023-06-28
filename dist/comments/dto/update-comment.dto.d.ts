import { CreateCommentDto } from "./create-comment.dto";
import { Task } from "src/tasks/entities/task.entity";
declare const UpdateCommentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCommentDto>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    description?: string;
    task?: Task;
}
export {};
