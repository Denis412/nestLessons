import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<CreateCommentDto & import("./entities/comment.entity").Comment>;
    findAll(): Promise<import("./entities/comment.entity").Comment[]>;
    findOne(id: string): Promise<import("./entities/comment.entity").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<{
        id: number;
        description?: string;
        task?: import("../tasks/entities/task.entity").Task;
    } & import("./entities/comment.entity").Comment>;
    remove(id: string): Promise<void>;
}
