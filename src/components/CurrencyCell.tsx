import React from 'react';
import {Text} from 'react-native';

type CurrencyCell = {
  key: string;
  index: number;
  currency: string;
  value: number;
};

const CurrencyCell = ({currency, value, index}: CurrencyCell) => {
  return (
    <Text style={{backgroundColor: index % 2 === 0 ? 'gray' : 'white'}}>
      {currency}
      {value}
    </Text>
  );
};

export {CurrencyCell};
