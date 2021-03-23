import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

import img from '../../logo.png';

export const Layout: FC = ({ children }) => (
  <div>
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img src={img} width="100" alt="" />
        <h1 className={styles.title}>lighthouse exchange</h1>
      </Link>
    </header>

    {children}
  </div>
);
