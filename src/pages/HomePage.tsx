import { lazy } from 'react';
import { useFetchRequest } from '@/shared/hooks/useFetchData';

const ProductsList = lazy(() => import('@/features/productsList'));

const HomePage = () => {
  const dataQuery = useFetchRequest();

  return (
    <div className="container">
      <ProductsList dataQuery={dataQuery}/>
    </div>
  );
};

export default HomePage;
