import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


function CategoryGridTile({title,color,onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{ color: '#ccc' }}
                onPress = {onPress}
            >
                <View style={[styles.innerConatiner, {backgroundColor:color,borderRadius:8}]}>
                    <Text style={styles.title}>{ title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor:'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS==="android"? "hidden" : 'visible'
    },
    innerConatiner: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        flex:1,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
})