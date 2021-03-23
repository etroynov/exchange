import getSymbolFromCurrency from 'currency-symbol-map';

import styles from './index.module.css';

export const CurrencyLabel = ({ text = '0', type = '' }) => (
  <span className={styles.component} data-testid="currency-label">
    {text} {getSymbolFromCurrency(type)}
  </span>
);
