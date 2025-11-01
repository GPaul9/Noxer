import styles from './MainLayout.module.scss';

import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { BottomNav } from '@/features/bottomNav';

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
