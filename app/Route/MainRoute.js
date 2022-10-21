import React from 'react';
import {
  NavigationContainer,
  CommonActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Products from '../screens/Products';

const Stack = createStackNavigator();
const options = {headerShown: false};

const MainRoute = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} options={options} />
      <Stack.Screen name="Products" component={Products } options={options} />

    </Stack.Navigator>
  </NavigationContainer>)
};
export default MainRoute;
