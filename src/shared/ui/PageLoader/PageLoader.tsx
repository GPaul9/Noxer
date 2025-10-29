import styles from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__icon}></span>
    </div>
  );
};
