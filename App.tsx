// @ts-ignore
if (__DEV__) {
  import('./ReactotronConfig');
}
import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import {useAPI} from './src/hooks/useApi';
import {CurrencyCell} from './src/components/CurrencyCell';

const App: () => Node = () => {
  const params = {access_key: '486c5e0ebcf24de7ae7165a59449d5e8'};

  const {data, error} = useAPI('http://api.exchangeratesapi.io/v1/latest', {
    params: {access_key: '486c5e0ebcf24de7ae7165a59449d5e8'},
  });

  console.log({data});

  return (
    <SafeAreaView>
      <ScrollView>
        {data
          ? Object.keys(data.rates).map((item, index) => (
              <CurrencyCell
                currency={item}
                value={data.rates[item] as number}
              />
            ))
          : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
