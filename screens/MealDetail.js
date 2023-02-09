import { Image, Text, View } from "react-native";

function MealDetail({route}) { 
    const mealId = route.params.mealId;
    
    return (
        <View>
            <Image />
            <Text></Text>
            <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}m</Text>
                    <Text style={styles.detailsItem}>{ complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{ affordability.toUpperCase()}</Text>
            </View>
        </View>
    )
}

export default MealDetail;