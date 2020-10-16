import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    } from 'react-native';

import {CATEGORIES,MEALS} from '../data/dummy-data';


const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.fi

    return (
        <View style={styles.screen}>
            <Text>Catogory Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }} 
        />
        <Button title="Go Back" onPress={()=> {
            props.navigation.goBack();
        }} />
        </View>
        
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default CategoryMealScreen;