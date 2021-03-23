import useFetch from 'use-http';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';

import { Layout } from '../components';
import { ExchangeFormContainer } from '../containers';

import { CurrenciesContext } from '../contexts';

import type { Currencies } from '../typings';

type Params = {
  type: string;
};

export const Exchange = () => {
  const { get } = useFetch('https://api.exchangeratesapi.io');
  const { type } = useParams<Params>();

  const [currencies, setCurrencies] = useState<Currencies>({});
  const timer = useRef<any>(null);

  const getCurrencyRate = useCallback(
    async (from: string) => {
      const currencyRate = await get(`/latest?base=${from}`);

      setCurrencies(currencyRate.rates);
    },
    [get]
  );

  useEffect(() => {
    const _type = type.toUpperCase();
    getCurrencyRate(_type);

    timer.current = setInterval(() => {
      getCurrencyRate(_type);
    }, 10 * 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [getCurrencyRate, type]);

  return (
    <Layout>
      <CurrenciesContext.Provider
        value={{
          currencies,
          setCurrencies,
        }}
      >
        <ExchangeFormContainer />
      </CurrenciesContext.Provider>
    </Layout>
  );
};
