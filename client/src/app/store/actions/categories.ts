import { Action } from '@ngrx/store';
import { ViewModelCategories} from '../../core/models/view-models/categories.model'

export const getAllCategories = 'Get All Categories';

export class GetAllCategoriesAction implements Action {
  readonly type: string = getAllCategories;
  constructor(public payload: ViewModelCategories[]) {}
}

export type Types = GetAllCategoriesAction 