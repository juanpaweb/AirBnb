/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import LoginScreen from './src/screens/LoginInScreen';
import LoginCo from './src/screens/LoginCo';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// const MainStackNavigator = createStackNavigator(
//   {
//     LoggedOut: {screen: LoginScreen},
//   },
//   {
//     headerMode: 'screen',
//   },
// );
// const App = createAppContainer(MainStackNavigator);
// export default App;
//export default LoginScreen;
export default LoginCo;
