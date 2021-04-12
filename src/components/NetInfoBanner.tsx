import {useNetInfo} from '@react-native-community/netinfo';
import React from 'react';
import {View, Text} from 'react-native';

const NetInfoBanner = () => {
  const netInfo = useNetInfo();

  return netInfo.isConnected ? null : (
    <View
      style={{
        height: 128,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Your internet connection is unstable</Text>
    </View>
  );
};
export {NetInfoBanner};
