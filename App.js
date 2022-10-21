import React from 'react';
import {TextInput, StatusBar, View, StyleSheet,LogBox} from 'react-native';
import MainRoute from './app/Route/MainRoute';

LogBox.ignoreAllLogs();
const App = () => {
  <View style={styles.container}></View>;
  return <MainRoute />;
};

const styles = StyleSheet.create({
  container: {},
});
export default App;