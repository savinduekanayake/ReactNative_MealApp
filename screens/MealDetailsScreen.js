import React, {useEffect,useCallback} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import DefaultText from '../components/DefaultText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

import {useSelector,useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {
    const  dispatch = useDispatch();

    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.meals.meals);
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const toggleFavoriteHandler = useCallback( () => {
        dispatch(toggleFavorite(mealId));
    },[dispatch,mealId])

    // Dispatch only done by main component-> using useEffect to pass the function
    useEffect(() => {
        props.navigation.setParams({toggleFav:toggleFavoriteHandler})
    },[toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav : currentMealIsFavorite })
    },[currentMealIsFavorite]);

    // --------This is not the optimal solution------------
    // to avoid infinite loop
    // useEffect(() => {
    //     props.navigation.setParams({mealTitle: selectedMeal.title})
    // },[selectedMeal])

    
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient} >{ingredient}</ListItem>))
            }

            <Text style={styles.title}>List of steps</Text>
            {selectedMeal.steps.map(step => (
                <ListItem key={step} >{step}</ListItem>))
            }
        </ScrollView>
    );
}
// setting up page title
MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav')

    const isFavorite = navigationData.navigation.getParam('isFav');
    
    return {
        headerTitle: mealTitle,
        // set the favorite button into top bar of the page
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName={isFavorite? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;