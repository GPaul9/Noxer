import { NavLink } from 'react-router-dom';
import styles from './BottomNav.module.scss';
import AccountIcon from '@/assets/account-icon.svg?react';
import CartIcon from '@/assets/cart-icon.svg?react';
import CatalogIcon from '@/assets/catalog-icon.svg?react';
import FavoriteIcon from '@/assets/favorite-icon.svg?react';
import HomeIcon from '@/assets/home-icon.svg?react';

export const BottomNav = () => {
  return (
    <div className={`container ${styles.nav}`}>
      <nav className={styles.nav__content}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
          }
        >
          <HomeIcon className={styles.nav__icon} aria-label='Главная' />
        </NavLink>
        <NavLink
          to='/catalog'
          className={({ isActive }) =>
            `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
          }
        >
          <CatalogIcon className={styles.nav__icon} aria-label='Каталог' />
        </NavLink>
        <NavLink
          to='/favorites'
          className={({ isActive }) =>
            `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
          }
        >
          <FavoriteIcon className={styles.nav__icon} aria-label='Избранные' />
        </NavLink>
        <NavLink
          to='/cart'
          className={({ isActive }) =>
            `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
          }
        >
          <CartIcon className={styles.nav__icon} aria-label='Корзина' />
        </NavLink>
        <NavLink
          to='/account'
          className={({ isActive }) =>
            `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
          }
        >
          <AccountIcon className={styles.nav__icon} aria-label='Аккаунт' />
        </NavLink>
      </nav>
    </div>
  );
};
