import { FC } from 'react';
import styles from './index.module.css';

export const Container: FC = ({ children }) => (
  <div className={styles.component}>{children}</div>
);
