import React, {createContext, useState, useContext} from 'react';

const INITIAL_STATE: IntervalState = {
  interval: 15 * 1000,
  setInterval: () => null,
};

interface IntervalState {
  interval: number;
  setInterval: () => void;
}

export const IntervalContext = createContext(INITIAL_STATE);
export const IntervalProvider = ({children}: any) => {
  const [interval, setInterval] = useState<number>(INITIAL_STATE.interval);
  return (
    <IntervalContext.Provider value={{interval, setInterval}}>
      {children}
    </IntervalContext.Provider>
  );
};
export const useInterval = () => useContext(IntervalContext);
