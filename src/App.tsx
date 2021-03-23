import { v1 as uuid } from 'uuid';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from './components';

import { Home, Exchange } from './pages';

import { AccountsContext } from './contexts';

const accountsState = [
  {
    id: uuid(),
    title: 'USD - American Dollar',
    type: 'USD',
    balance: 25.51,
  },
  {
    id: uuid(),
    title: 'GBP - British Pound',
    type: 'GBP',
    balance: 58.33,
  },
  {
    id: uuid(),
    title: 'EUR - Euro',
    type: 'EUR',
    balance: 116.12,
  },
];

export const App = () => {
  const [accounts, setAccounts] = useState(accountsState);

  return (
    <Router>
      <Container>
        <AccountsContext.Provider value={{
          accounts,
          setAccounts,
        }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/exchange/:type">
              <Exchange />
            </Route>
          </Switch>
        </AccountsContext.Provider>
      </Container>
    </Router>
  );
};
