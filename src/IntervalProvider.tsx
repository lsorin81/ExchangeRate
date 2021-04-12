import React, {createContext, useState, useContext} from 'react';

const INITIAL_STATE: IntervalState = {
  refreshInterval: 15 * 1000,
  setRefreshInterval: () => null,
};

interface IntervalState {
  refreshInterval: number;
  setRefreshInterval: () => void;
}

export const IntervalContext = createContext(INITIAL_STATE);
export const IntervalProvider = ({children}: any) => {
  const [refreshInterval, setRefreshInterval] = useState<number>(
    INITIAL_STATE.refreshInterval,
  );
  return (
    <IntervalContext.Provider value={{refreshInterval, setRefreshInterval}}>
      {children}
    </IntervalContext.Provider>
  );
};
export const useRefreshInterval = () => useContext(IntervalContext);
