import { useContext } from "react"
import MealList from "../components/MealList/MealsList"
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";
import { StyleSheet ,Text, View} from "react-native";
import { useSelector } from "react-redux";

function Favourites() {
    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMealIds = useSelector(state => state.favouriteMeals.ids)
    const favMeals = MEALS.filter((meal) => //favouriteMealsCtx.ids.includes(meal.id))
        favouriteMealIds.includes(meal.id))
    if (favMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet</Text>
            </View>
        )
    }
    else {
        return (
            <MealList items={favMeals} />
        )
    }
}

export default Favourites;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})