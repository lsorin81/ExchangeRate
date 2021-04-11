import React from 'react';
import {Text} from 'react-native';

type CurrencyCell = {
  key: string;
  currency: string;
  value: number;
};

const CurrencyCell = ({currency, value}: CurrencyCell) => {
  return (
    <Text>
      {currency}
      {value}
    </Text>
  );
};

export {CurrencyCell};
