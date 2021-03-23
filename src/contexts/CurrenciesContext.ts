import { createContext } from 'react';

import type { Currencies } from '../typings';

type State = {
  currencies: Currencies;
  setCurrencies: (data: Currencies) => void;
}

const initialState: State = {
  currencies: {},
  setCurrencies: () => null,
}

export const CurrenciesContext = createContext(initialState);