import React, {useEffect} from 'react';
import {SafeAreaView, Alert, StyleSheet, Text, ScrollView} from 'react-native';
import {useAPI} from '../hooks/useApi';
import {CurrencyCell} from '../components/CurrencyCell';
import {useCurrency} from '../CurrencyProvider';

const HomeScreen = () => {
  const {base} = useCurrency();
  const {data, error} = useAPI('http://api.exchangeratesapi.io/v1/latest', {
    params: {access_key: '486c5e0ebcf24de7ae7165a59449d5e8', base},
  });

  useEffect(() => {
    if (error) {
      Alert.alert(
        'This base currency is not included in your subscription plan. Switch currencies from Settings.',
      );
    }
  }, [error]);

  return (
    <SafeAreaView>
      <ScrollView>
        {data
          ? Object.keys(data.rates).map((item, index) => (
              <CurrencyCell
                key={item}
                index={index}
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
