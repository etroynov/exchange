import { FC } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';

import { Account } from '../../typings';

import styles from './index.module.css';

type Props = Account;

export const Card: FC<Props> = ({ title, type, balance }) => (
  <section className={styles.component} data-testid="card-container">
    <header className={styles.row}>
      <div className={styles.col}>
        <h2 className={styles.title} data-testid="card-title">{title}</h2>
        <h3 className={styles.type} data-testid="card-type">{type}</h3>
      </div>
    </header>

    <main className={styles.balance} data-testid="card-balance">
      {getSymbolFromCurrency(type)} {balance}
    </main>
  </section>
);
