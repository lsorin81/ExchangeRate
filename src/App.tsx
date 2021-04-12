// @ts-ignore
if (__DEV__) {
  import('../ReactotronConfig');
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './Home/HomeScreen';
import {HistoryScreen} from './History/HistoryScreen';
import {SettingsScreen} from './Settings/SettingsScreen';
import {CurrencyProvider} from './CurrencyProvider';
import {IntervalProvider} from './IntervalProvider';
import {NetInfoBanner} from './components/NetInfoBanner';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CurrencyProvider>
      <IntervalProvider>
        <NavigationContainer>
          <NetInfoBanner />
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </IntervalProvider>
    </CurrencyProvider>
  );
};

export default App;
