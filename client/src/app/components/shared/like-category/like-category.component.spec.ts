import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCategoryComponent } from './like-category.component';

describe('LikeCategoryComponent', () => {
  let component: LikeCategoryComponent;
  let fixture: ComponentFixture<LikeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
