import React, {createContext, useState, useContext, Dispatch} from 'react';
import {BaseCurrencies} from './utils/types';

const INITIAL_STATE: CurrencyState = {base: 'EUR', setBase: () => null};

interface CurrencyState {
  base: BaseCurrencies;
  setBase: () => void;
}

export const CurrencyContext = createContext(INITIAL_STATE);
export const CurrencyProvider = ({children}: any) => {
  const [base, setBase] = useState<BaseCurrencies>(INITIAL_STATE.base);
  return (
    <CurrencyContext.Provider value={{base, setBase}}>
      {children}
    </CurrencyContext.Provider>
  );
};
export const useCurrency = () => useContext(CurrencyContext);
