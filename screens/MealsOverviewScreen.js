import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList/MealsList';

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
    
    return(<MealList items={displayedMeals} />)
}

export default MealsOverScreen;
