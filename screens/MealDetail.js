import { useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";
import ShortDetails from "../components/ShortDetails";
import { MEALS } from "../data/dummy-data";

function MealDetail({route,navigation}) { 
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    
    function pressed() {
        console.log("PRESSED");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<Button onPress={pressed} title='Tap me!'/>)
            }
        })
    })
    
    return (
        <View style={{margin:16}}>
            <Image source={{
                uri: selectedMeal.imageUrl
            }} style={ styles.img} />
            <Text style={styles.title}>{ selectedMeal.title}</Text>
            <View>
                <ShortDetails duration={selectedMeal.duration} complexity={ selectedMeal.complexity} affordability={selectedMeal.affordability} />
            </View>
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => {
                return(<Text key={ingredient}>{ingredient}</Text>)
            })}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step) => {
                return(<Text key={step}>{ step}</Text>)
            })}
        </View>
    )
}

export default MealDetail;

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    }
})
