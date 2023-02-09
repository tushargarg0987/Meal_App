import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

function mealItem({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();

    function onNavigate() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }
    
    return (
        <View style={styles.mealItems}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={onNavigate}
            >
                <View style={{ borderRadius: 8, overflow: 'hidden' }}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.img} />
                    <Text style={styles.title}>{ title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}m</Text>
                    <Text style={styles.detailsItem}>{ complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{ affordability.toUpperCase()}</Text>
                </View>
                </View>
            </Pressable>
        </View>
    )
}

export default mealItem;

const styles = StyleSheet.create({
    mealItems: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS==="android"? "hidden" : 'visible'
    },
    img: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 8,
        justifyContent:'center'
    },
    detailsItem: {
        marginHorizontal: 5,
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.7,
    },
})