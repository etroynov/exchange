import { createContext } from 'react';

import type { Account } from '../typings';

type State = {
  accounts: Account[];
  setAccounts: (data: Account[]) => void;
}

const initialState: State = {
  accounts: [],
  setAccounts: (accounts) => null,
}

export const AccountsContext = createContext(initialState);