import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../data/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.setCategories();
  }

  setCategories(): void {
    const categories = this.categoryService.getCategories();
    if (categories) {
      this.categories = categories;
    }
  }
}
