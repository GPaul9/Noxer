import { useQuery } from '@tanstack/react-query';
import { fetchFilterProducts, FetchRequest } from '../api/data';

export const useFetchRequest = () => {
  return useQuery({
    queryKey: ['mainData'],
    queryFn: FetchRequest,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useFetchFilterProducts = (page: number, per_page: number, search: string) =>
  useQuery({
    queryKey: ['filterProducts', page, per_page, search],
    queryFn: () => fetchFilterProducts({ page, per_page, search }),
    enabled: !!search.trim(),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 10,
  });
