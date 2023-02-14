import { useContext, useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, Button } from "react-native";
import ShortDetails from "../components/ShortDetails";
import { MEALS } from "../data/dummy-data";
import FavouriteButton from "../components/FavouriteButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite,removeFavourite } from "../store/redux/favourites";
// import { FavouritesContext } from "../store/context/favourites-context";

function MealDetail({ route, navigation }) { 
    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavourite = favouriteMealIds.includes(mealId);
    
    function changeFavouriteStatusHandler() {
        if (mealIsFavourite) {
            // favouriteMealsCtx.removeFavourite(mealId);
            dispatch(removeFavourite({ id: mealId }));
        }
        else {
            // favouriteMealsCtx.addFavourite(mealId);
            dispatch(addFavourite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<FavouriteButton
                    onPress={changeFavouriteStatusHandler}
                    icon={mealIsFavourite ? 'star' : 'star-outline'}
                    color='white' />)
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
