import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import Screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailsScreen'
import FavoriteScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
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
        tabBarColor: Colors.primaryColor
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favorite!', //overide the text in tab
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.accentColor
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
                activeTintColor: Colors.accentColor
            }
        });

export default createAppContainer(MealsFavTabNavigator);