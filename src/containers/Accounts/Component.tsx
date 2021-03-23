import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components';

import { AccountsContext } from '../../contexts';

import styles from './index.module.css';

export const AccountsContainer = () => {
  const { accounts } = useContext(AccountsContext);

  return (
    <section>
      <header className={styles.header}>
        <h2>All accounts</h2>
      </header>

      <main className={styles.list}>
        {accounts.map((account) => (
          <Link key={account.id} to={`/exchange/${account.type.toLowerCase()}`}>
            <Card {...account} />
          </Link>
        ))}
      </main>
    </section>
  );
};
