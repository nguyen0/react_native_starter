import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View,
  Text
} from 'react-native';
import AppNavContainer from './src/navigations';
const App = () => {
  return (
    <AppNavContainer></AppNavContainer>
  );
};

export default App;