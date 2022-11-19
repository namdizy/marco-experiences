import { CategoryItem } from './category-item.interface';

export interface Category {
  id?: string;
  title?: string;
  items?: CategoryItem[];
}
