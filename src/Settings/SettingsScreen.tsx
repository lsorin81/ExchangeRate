import React, {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import {useCurrency} from '../CurrencyProvider';
import {useInterval} from '../IntervalProvider';
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
    value: 3 * 1000,
  },
  {
    label: '5 sec',
    value: 5 * 1000,
  },
  {
    label: '15 sec',
    value: 15 * 1000,
  },
];
const SettingsScreen = () => {
  const {base, setBase} = useCurrency();
  const {interval, setInterval} = useInterval();
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>Pick the base currency:</Text>
      <DropDownPicker
        items={baseCurrencies}
        defaultValue={base}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item: DropDownElement) => setBase(item.value)}
      />
      <Text>Pick the refresh interval:</Text>
      <DropDownPicker
        items={refreshIntervals}
        defaultValue={interval}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item: DropDownElement) => setInterval(item.value)}
      />
    </SafeAreaView>
  );
};

export {SettingsScreen};
