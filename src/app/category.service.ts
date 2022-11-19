import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from './data/catergories';

import { Category } from './data/category.interface';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: Category[];
  constructor() {
    this.categories = Categories;
  }

  getCategories() {
    return this.categories;
  }

  getCategory(id: string): Category | null {
    const found = this.categories.find((category) => category.id == id);
    return found ? found : null;
  }

  getCategoryItem(itemId: string) {
    for (let i = 0; i < this.categories.length; i++) {
      const categoryItems = this.categories[i].items;

      if (!categoryItems) {
        continue;
      }

      const categoryItem = categoryItems.find((item) => item.id == itemId);
      return categoryItem;
    }
    return null;
  }
}
