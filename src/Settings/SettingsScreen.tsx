import React, {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import {BaseCurrencies} from '../utils/types';

type DropDownElement = {
  label: string;
  value: string | number;
};

const baseCurrencies = [
  {
    label: 'EUR',
    value: 'EUR',
  },
  {
    label: 'USD',
    value: 'USD',
  },
  {
    label: 'RON',
    value: 'RON',
  },
];

const refreshIntervals = [
  {
    label: '3 sec',
    value: 3,
  },
  {
    label: '5 sec',
    value: 5,
  },
  {
    label: '15 sec',
    value: 15,
  },
];
const SettingsScreen = () => {
  const [baseCurrency, setBaseCurrency] = useState<BaseCurrencies>('');
  const [refreshInterval, setRefreshInterval] = useState<number>();
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>Pick the base currency:</Text>
      <DropDownPicker
        items={baseCurrencies}
        defaultValue={baseCurrency}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item: DropDownElement) => setBaseCurrency(item.value)}
      />
      <Text>Pick the refresh interval:</Text>
      <DropDownPicker
        items={refreshIntervals}
        defaultValue={refreshInterval}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item: DropDownElement) => setRefreshInterval(item.value)}
      />
    </SafeAreaView>
  );
};

export {SettingsScreen};
