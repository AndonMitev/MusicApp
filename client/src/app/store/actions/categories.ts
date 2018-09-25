import { Action } from '@ngrx/store';
import { ViewCategoriesModel } from '../../core/models/view-models/categories.model';
import { InputCategoryModel } from '../../core/models/input-models/category.model';

export const getAllCategories = '[CATEGORIES] Get All Categories';
export const addNewCategory = '[CATEGORIES] Add New Category';
export const getDetailsCategory = '[CATEGORIES] Get Category Details';
export const getCategoryTitle = '[CATEGORIES] Get Category Title';

export class GetAllCategoriesAction implements Action {
  readonly type: string = getAllCategories;
  constructor(public payload: ViewCategoriesModel[]) {}
}

export class AddCategoryAction implements Action {
  readonly type: string = addNewCategory;
  constructor(public payload: InputCategoryModel) {}
}

export class GetCategoryDetailsAction implements Action {
  readonly type: string = getDetailsCategory;
  constructor(public payload: ViewCategoriesModel) {}
}

export class GetCategoryByTitleAction implements Action {
  readonly type: string = getCategoryTitle;
  constructor(public payload: ViewCategoriesModel) {}
}

export type Types = GetAllCategoriesAction | AddCategoryAction | GetCategoryDetailsAction;
