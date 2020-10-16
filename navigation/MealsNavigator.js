import {Platform} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import Screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailsScreen'
import FavoriteScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

// setup STACK navigator
const MealsNavigator = createStackNavigator(
    {
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle: {
                backgroundColor: Platform.OS ==='android'? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android'?  'white' : Colors.primaryColor
        }
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS ==='android'? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android'?  'white' : Colors.primaryColor
        }
    },
    MealDetail: MealDetailScreen,
    },
    {
        // no need of adding initialRoute. because defaultly it happen
        initialRouteName: 'Categories',
        // mode: 'modal',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS ==='android'? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android'?  'white' : Colors.primaryColor
        }
    }
);

// Setup TAB navigator
const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoriteScreen
});

export default createAppContainer(MealsFavTabNavigator);