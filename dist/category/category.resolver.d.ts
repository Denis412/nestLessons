import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryInput: CreateCategoryInput): Promise<CreateCategoryInput & Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    updateCategory(id: number, updateCategoryInput: UpdateCategoryInput): Promise<{
        id: number;
        name: string;
    } & Category>;
    removeCategory(id: number): Promise<void>;
}
