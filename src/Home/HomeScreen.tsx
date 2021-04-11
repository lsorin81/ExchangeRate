import React from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import {useAPI} from '../hooks/useApi';
import {CurrencyCell} from '../components/CurrencyCell';

const HomeScreen = () => {
  const params = {access_key: '486c5e0ebcf24de7ae7165a59449d5e8'};

  const {data, error} = useAPI('http://api.exchangeratesapi.io/v1/latest', {
    params: {access_key: '486c5e0ebcf24de7ae7165a59449d5e8'},
  });

  return (
    <SafeAreaView>
      <ScrollView>
        {data
          ? Object.keys(data.rates).map((item, index) => (
              <CurrencyCell
                key={item}
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

export {HomeScreen};
