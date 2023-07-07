import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private readonly repository;
    constructor(repository: Repository<Category>);
    create(createCategoryInput: CreateCategoryInput): Promise<CreateCategoryInput & Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryInput: UpdateCategoryInput): Promise<{
        id: number;
        name: string;
    } & Category>;
    remove(id: number): Promise<void>;
}
