import * as React from 'react';
import { NavigationContainer } from '@react-navigation/bottom-tabs';
import {StackNavigatin} from'@react-navigation/stack'
import DrawerNavigator from './navigation/drawer';

export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
  );
}
