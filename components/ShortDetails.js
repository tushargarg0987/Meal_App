import { View,Text, StyleSheet } from "react-native";

function ShortDetails({duration,complexity,affordability}) {
    return (
        <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}m</Text>
                    <Text style={styles.detailsItem}>{ complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{ affordability.toUpperCase()}</Text>
            </View>
    )
 }

export default ShortDetails;

const styles = StyleSheet.create({
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
})