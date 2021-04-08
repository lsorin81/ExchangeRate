import type {Node} from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import useApi from './src/hooks/useApi';

const App: () => Node = () => {
  const {data} = useApi('https://exchangeratesapi.io', {});
  console.log({data});
  return (
    <SafeAreaView>
      <Text> Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
