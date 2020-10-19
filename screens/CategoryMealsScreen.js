import React from 'react';
import {useSelector} from 'react-redux';


import {CATEGORIES,MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';


const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = availableMeals.filter(meal => meal.categoryId.indexOf(catId) >=0)

    if(displayedMeals.length === 0 ){
        return (
            <View style={StyleSheet.content}>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        )
    }
    return (
        <MealList 
            listData={displayedMeals} 
            // navigation props pass to child component
            navigation={props.navigation} 
        />
        
    );
}

// Dynamicaly set the navigation title using navigation data
CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        
    };
}

const styles = StyleSheet.create({
    content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;