import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

const CategoryGridTile = props => {
    // for work touchable opacity for android
    let Touchablecmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchablecmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem} >
            <Touchablecmp
                style={{flex:1}} //can add styles
                onPress={props.onSelect}>
                <View
                    style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </Touchablecmp>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10, // for android touchableNAtiveFeedback
        overflow: 'hidden', // child items can't be outside the component
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        // note: shadow effect only affect ios, for android elevation
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile;