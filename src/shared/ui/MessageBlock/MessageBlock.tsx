import styles from './MessageBlock.module.scss';

type Tprops = {
  message: string;
  onRefetch?: () => void;
}

export const MessageBlock = ({ message, onRefetch }: Tprops) => {
  return (
    <div className={styles.error}>
      <div className={styles.error__content}>
        <p className={styles.error__message}>{message}</p>

        {onRefetch &&
          <button className={styles.error__refetch} onClick={onRefetch}>
            Повторить запрос
          </button>
        }
      </div>
    </div>
  );
};
