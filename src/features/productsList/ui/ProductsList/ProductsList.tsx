import styles from './ProductsList.module.scss';

import { UseQueryResult } from '@tanstack/react-query';
import { MainData } from '@/shared/types/mainData';
import { MessageBlock } from '@/shared/ui/MessageBlock';
import { ProductCard } from '@/shared/ui/ProductCard';
import { ProductsListSkeleton } from './ProductsListSkeleton';

type TProps = {
  dataQuery: UseQueryResult<MainData>
}

const ProductsList = ({dataQuery}: TProps) => {
  const { data, isLoading, isError, refetch } = dataQuery;

  if (isLoading) return <ProductsListSkeleton />;
  if (isError) return <MessageBlock message='Не удалось получить список :(' onRefetch={refetch}/>;
  if (!data?.products) return <MessageBlock message='Список пуст' />;

  const products = data?.products;

  return (
    <section className={styles.products}>
      <ul className={styles.products__list}>
        {products.map(product => (
          <li key={product.id} className={styles.product__item}>
            <ProductCard productData={product}/>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
