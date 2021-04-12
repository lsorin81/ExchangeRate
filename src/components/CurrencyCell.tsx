import React from 'react';
import {View, Text} from 'react-native';

type CurrencyCell = {
  key: string;
  index: number;
  currency: string;
  value: number;
};

const CurrencyCell = ({currency, value, index}: CurrencyCell) => {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: index % 2 === 0 ? '#fafafa' : 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text>{currency}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export {CurrencyCell};
