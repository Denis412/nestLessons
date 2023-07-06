import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly repository: Repository<Task>,
  ) {}

  create(createTaskInput: CreateTaskInput) {
    return this.repository.save(createTaskInput);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.repository.save({ ...updateTaskInput, id });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
