import { GetAllCategoriesService } from './get-all.service';
import { AddCategoryService } from './add-category.service';
import { LikeCategoryService } from './like-category.service';
import { GetCategoryDetailsService } from './get-details.service';
import { GetCategoryByTitleService } from './get-category-title.service';

export const categoryServices = [
  GetAllCategoriesService,
  AddCategoryService,
  LikeCategoryService,
  GetCategoryDetailsService,
  GetCategoryByTitleService
];
