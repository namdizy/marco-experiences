import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../data/category.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  categories: Category[] = [];
  selectedCategoryId: string = '';
  currentRoute: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        const route = this.currentRoute.split('/');

        if (route.length > 1) {
          this.selectedCategoryId = route[2];
        }
      }
    });
  }

  setSelectedCategoryId(id?: string) {
    if (!id) {
      return;
    }
    this.selectedCategoryId = id;
  }
}
