import { Category } from './categories';
import { Pagination } from './pagination';
import { Product } from './products';
import { SpecialProjectData } from './specialProjectData';

export type MainData = SpecialProjectData & {
  categories: Category[];
  products: Product[];
  status: string;
  pagination: Pagination;
}
