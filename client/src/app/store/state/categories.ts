import { ViewCategoriesModel } from '../../core/models/view-models/categories.model';

export interface CategoriesState {
  all: ViewCategoriesModel[];
  details: ViewCategoriesModel;
}
