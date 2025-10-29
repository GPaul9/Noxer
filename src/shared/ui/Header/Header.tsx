import styles from './Header.module.scss';

import '@/shared/constants/breakpoints';
import { SearchBar } from '@/features/search/ui/SearchBar';

export const Header = () => {
  return(
    <header className={styles.header}>
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
};
