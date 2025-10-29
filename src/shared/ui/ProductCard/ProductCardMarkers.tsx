import styles from './ProductCard.module.scss';

import { ProductMark } from '@/shared/types/products';

type TProps = {
  marks: ProductMark[];
}

export const ProductCardMarkers = ({ marks }: TProps) => {
  if (marks.length === 0) return null;

  return (
    <div className={styles.marks}>
      {marks.map((mark, i) => (
        <div
          key={i}
          className={styles.marks__item}
          style={{ backgroundColor: mark.color_code }}
        >
          {mark.Mark_Name}</div>
      ))}
    </div>
  );
};
