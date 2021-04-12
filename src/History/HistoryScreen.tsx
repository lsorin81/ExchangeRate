import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../components/Header';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={{padding: 16}}>
      <Header title="History api not included in free plan" />
    </SafeAreaView>
  );
};

export {HistoryScreen};
