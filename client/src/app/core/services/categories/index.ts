import { GetAllCategoriesService } from './get-all.service';
import { AddNewCategoryService } from './add-category.service';
import { LikeCategoryService } from './like-category.service';

export const categoryServices = [
  GetAllCategoriesService,
  AddNewCategoryService,
  LikeCategoryService
];
