import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

//Service
import { AddNewCategoryService } from '../../../core/services/categories/add-category.service';
//Model
import { CategoryInputModel } from '../../../core/models/input-models/category.model';
//State
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  public categoryForm: FormGroup;
  public buttonText: string;
  public isClicked: boolean;
  private categoryModel: CategoryInputModel;

  constructor(
    private fb: FormBuilder,
    private categoryServices: AddNewCategoryService
  ) {
    this.buttonText = 'Add';
    this.isClicked = false;
  }

  public ngOnInit(): void {
    this.initializeCategoryForm();
  }

  public ngOnDestroy(): void {}

  public initializeCategoryForm(): void {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  public submitCategoryForm(): void {
    this.buttonText = 'Processing...';
    this.isClicked = true;

    const categoryData = this.categoryForm.value;
    this.categoryModel = new CategoryInputModel(
      categoryData['title'],
      categoryData['imageUrl']
    );

    this.categoryServices.addNewCategory(this.categoryModel).subscribe(() => {
      this.buttonText = 'Add';
      this.isClicked = false;
      this.categoryForm.reset({ title: '', imageUrl: '' });
    });
  }

  public get title(): AbstractControl {
    return this.categoryForm.get('title');
  }

  public get imageUrl(): AbstractControl {
    return this.categoryForm.get('imageUrl');
  }
}
