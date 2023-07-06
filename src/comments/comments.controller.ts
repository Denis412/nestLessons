import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Put,
  UseGuards,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CreateCommentDto, CreateCommentSchema } from "./dto/create-comment.dto";
import { UpdateCommentDto, UpdateCommentSchema } from "./dto/update-comment.dto";
import { ApiTags, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { Comment } from "./entities/comment.entity";
import { JoiValidationPipe } from "src/pipes/ValidationPipe";
import { AuthGuard } from "@nestjs/passport";

@ApiTags("Comments")
@UseGuards(AuthGuard("jwt"))
@ApiBearerAuth()
@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({
    status: 201,
    description: "Комментарий создан",
    type: Comment,
  })
  @ApiResponse({ status: 401, description: "Неавторизованно" })
  @Post()
  @UsePipes(new JoiValidationPipe(CreateCommentSchema))
  create(@Body() createCommentDto: CreateCommentDto): Promise<CreateCommentDto & Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Comment> {
    return this.commentsService.findOne(+id);
  }

  @Patch(":id")
  @UsePipes(new JoiValidationPipe(UpdateCommentSchema))
  update(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentDto
  ): Promise<UpdateCommentDto & Comment> {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.commentsService.remove(+id);
  }
}
