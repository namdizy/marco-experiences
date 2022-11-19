import { Component, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../data/category.interface';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
})
export class CategoryDetailComponent {
  category: Category = {};
  breakpoint!: number;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setCategoryItem();
      }
    });
  }

  ngOnInit(): void {
    this.setCategoryItem();
  }

  setCategoryItem(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const category = this.categoryService.getCategory(id);
    if (category) {
      this.category = category;
    }
  }
}
