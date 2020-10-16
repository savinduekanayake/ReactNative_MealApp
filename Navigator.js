import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreenNew from './HomeScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

// Other code for HomeScreen here...

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreenNew,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
// const AppContainer = createAppContainer(AppNavigator);

// // Other code for App component here...

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default createAppContainer(AppNavigator);