import React from 'react';

import {CATEGORIES,MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId) >=0)

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

export default CategoryMealScreen;