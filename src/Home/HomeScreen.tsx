import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {CurrencyCell} from '../components/CurrencyCell';
import {Header} from '../components/Header';
import {useCurrency} from '../CurrencyProvider';
import {useAPI} from '../hooks/useApi';
import {useRefreshInterval} from '../IntervalProvider';

const HomeScreen = () => {
  const {base} = useCurrency();
  const {refreshInterval} = useRefreshInterval();

  const {data, error, fetch, isLoading} = useAPI(
    'http://api.exchangeratesapi.io/v1/latest',
    {
      params: {access_key: '486c5e0ebcf24de7ae7165a59449d5e8', base},
    },
  );

  // effect from react-navigation library for handling screen focus
  useFocusEffect(
    React.useCallback(() => {
      const id = setInterval(() => {
        fetch();
      }, refreshInterval);
      return () => clearInterval(id);
    }, [refreshInterval]),
  );

  // generic error handling
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
        <Header title={`1 ${base} is:`} />
        {isLoading ? (
          <ActivityIndicator />
        ) : data ? (
          <View>
            <Text style={{padding: 16, color: 'gray'}}>
              {new Date(data.timestamp).toLocaleTimeString()}
            </Text>
            {Object.keys(data.rates).map((item, index) => (
              <CurrencyCell
                key={item}
                index={index}
                currency={item}
                value={data.rates[item] as number}
              />
            ))}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export {HomeScreen};
