import getSymbolFromCurrency from 'currency-symbol-map';

import { useParams } from 'react-router-dom';
import { useContext, useState, useCallback, MouseEvent } from 'react';

import { Input, Select, CurrencyLabel } from '../../components';
import { AccountsContext, CurrenciesContext } from '../../contexts';

import type { Account } from '../../typings';

import styles from './index.module.css';

type Params = {
  type: string;
};

export const ExchangeFormContainer = () => {
  const { accounts, setAccounts } = useContext(AccountsContext);
  const { currencies } = useContext(CurrenciesContext);
  const { type } = useParams<Params>();

  const from = type.toUpperCase();
  const options = accounts.filter(
    (account) => account.type !== from
  ).map(
    ({ title, type, balance }) => ({
      name: `${title} | You have: ${balance.toFixed(2)} ${getSymbolFromCurrency(type)}`,
      value: type,
    })
  );

  const [fromAccount] = accounts.filter(
    (account) => account.type === type.toUpperCase()
  );
  const [toAccount] = accounts.filter(
    (account) => account.type !== type.toUpperCase()
  );

  const [currencyTo, setCurrencyTo] = useState(toAccount?.type);
  const [amountFrom, setAmountFrom] = useState('');
  const [amountTo, setAmountTo] = useState('');

  const handleCurrencyChange = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      const _accounts = accounts.reduce<Account[]>((acc, curr) => {
        if (curr.type === fromAccount.type) {
          curr.balance -= Number(amountFrom);
        }

        if (curr.type === toAccount.type) {
          curr.balance += Number(amountTo);
        }

        acc.push(curr);

        return acc
      }, [])

      setAccounts(_accounts);
    },
    [accounts, amountFrom, amountTo, fromAccount.type, setAccounts, toAccount.type]
  );

  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Exchange:&nbsp;
          <CurrencyLabel text={amountFrom} type={from} />
          &nbsp;to&nbsp;
          <CurrencyLabel text={amountTo} type={currencyTo} />
        </h2>
      </header>

      <main>
        <form className={styles.form} action="">
          <fieldset className={styles.fieldset}>
            <div>
              <h3 className={styles.fromTitle}>{fromAccount?.title}</h3>
              <h4 className={styles.fromSubTitle}>
                You have: {fromAccount?.balance}&nbsp;
                {getSymbolFromCurrency(from)}
              </h4>
            </div>
            <Select
              name="to"
              selected={currencyTo}
              options={options}
              onChange={(e) => {
                setCurrencyTo(e.target.value);
              }}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <Input
              placeholder="You will spend"
              name="amountFrom"
              value={amountFrom}
              onChange={(e) => {
                const from = e.target.value;
                const to = (Number(from) * currencies[currencyTo]).toFixed(2);

                setAmountFrom(from);
                setAmountTo(to);
              }}
            />
            <Input
              placeholder="You will get"
              name="amountTo"
              value={amountTo}
              onChange={(e) => {
                const to = e.target.value;
                setAmountTo(to);
              }}
            />
          </fieldset>

          <div>
            <input
              type="submit"
              value="exchange"
              onClick={handleCurrencyChange}
            />
          </div>
        </form>
      </main>
    </section>
  );
};
