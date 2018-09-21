import { Action } from '@ngrx/store';
import { ViewModelCategories } from '../../core/models/view-models/categories.model';
import { CategoryInputModel } from '../../core/models/input-models/category.model';

export const getAllCategories = '[CATEGORIES] Get All';
export const addNewCategory = '[CATEGORY] Add New';
export const likeCategory = '[CATEGORY] Like';

export class GetAllCategoriesAction implements Action {
  readonly type: string = getAllCategories;
  constructor(public payload: ViewModelCategories[]) {}
}

export class AddNewCategoryAction implements Action {
  readonly type: string = addNewCategory;
  constructor(public payload: CategoryInputModel) {}
}

export class LikeCategoryAction implements Action {
  readonly type: string = likeCategory;
  constructor(public payload: ViewModelCategories) {}
}

export type Types = GetAllCategoriesAction | AddNewCategoryAction;
