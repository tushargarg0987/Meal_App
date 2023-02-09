import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem';

function MealsOverScreen({ route, navigation }) {
    
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
    );

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    
        navigation.setOptions({
            title: catTitle
        });

    },[catId,navigation])
    
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration, complexity: item.complexity, affordability: item.affordability,
        }
        return <MealItem {...mealProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem = {renderMealItem}
            />
        </View>
    )
}

export default MealsOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})