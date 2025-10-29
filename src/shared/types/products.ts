import { Pagination } from './pagination';

export type Image = {
  Image_ID: number;
  Image_URL: string;
  MainImage: boolean;
  Product_ID: number;
  position: string;
  sort_order: number;
  title: string;
};

export type ProductMark = {
  Mark_Name: string,
  color_code: string,
};

export type Product = {
  id: number;
  images: Image[];
  marks: ProductMark[];
  name: string;
  old_price: string | null;
  price: number;
};


export type FilterResponse = {
  filters: object;
  pagination: Pagination;
  products: Product[];
  status: string;
  total: number;
};
