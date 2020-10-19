// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

// redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/reducers/meals';

// speed up navigations
enableScreens();

// combine all reducers
const rootReducer = combineReducers({
  // all reducers
  meals: mealsReducer,
})

// create a reducer
const store = createStore(rootReducer);


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded,setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading 
              startAsync = {fetchFonts} 
              onFinish={() => setFontLoaded(true)} 
            />
  }


  return <Provider store={store} >
          <MealsNavigator /> 
          </Provider>
}

// import React from 'react';


// import AppContainer from './Navigator';

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }