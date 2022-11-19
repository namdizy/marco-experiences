import { Component, Input } from '@angular/core';
import { CategoryItem } from '../data/category-item.interface';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent {
  @Input() categoryItem: CategoryItem = {};
}
