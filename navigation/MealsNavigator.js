import React from 'react';
import { Platform, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// import Screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailsScreen'
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle:{
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}

// setup STACK navigator
const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Meal Categories',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
            }
        },
        CategoryMeals: {
            screen: CategoryMealScreen,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
            }
        },
        MealDetail: MealDetailScreen,
    },
    {
        // no need of adding initialRoute. because defaultly it happen
        initialRouteName: 'Categories',
        // mode: 'modal',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen,
},
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

// configaration for Bottom tabs
const tabsScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
            }
        },
        tabBarColor: Colors.primaryColor,
        // for android TabBar text style
        tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily:'open-sans-bold'}} >Meals</Text> : 'Meals'
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favorite!', //overide the text in tab
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily:'open-sans-bold'}} >Favorites</Text> : 'Favorites'
        }
    }
}

// Setup TAB navigator
const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabsScreenConfig, {
            // for android
            activeTintColor: 'white',
            shifting: true, // android shifting effect
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
        : createBottomTabNavigator(tabsScreenConfig, {
            // custumize the TAB bar
            tabBarOptions: {
                activeTintColor: Colors.accentColor,
                // for ios TabBar text style
                labelStyle: {
                    fonstFamily: 'open-sans'
                }
            }
        });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
    },
    {
        // navigationOptions: {
        //     drawerLabel: 'Filter!!'
        // },
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const MainNaviator = createDrawerNavigator({
    MealsFavs: { screen: MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Meals'
    }},
    Filters: FiltersNavigator,

}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
} );

export default createAppContainer(MainNaviator);