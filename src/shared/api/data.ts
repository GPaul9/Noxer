import { MainData } from '../types/mainData';
import { FilterResponse } from '../types/products';
import { apiClient } from './apiClient';

export const FetchRequest = async (): Promise<MainData> => {
  const res = await apiClient.get('/products/on_main');
  return res.data;
};


type FilteredProductsProps = {
  page: number;
  per_page: number;
  search: string;
}

export const fetchFilterProducts = async ({ page = 1, per_page = 20, search }: FilteredProductsProps,
): Promise<FilterResponse> => {
  const response = await apiClient.post(
    `/products/filter?page=${page}&per_page=${per_page}`,
    { search },
  );
  return response.data;
};
