import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverScreen from './screens/MealsOverviewScreen';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: '#ccc',
            contentStyle: {
              backgroundColor: '#3f2f25'
            }
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component = {MealsOverScreen}
          //   options={({ route, navigation }) => {
          //     const catId = route.params.categoryId;
          //     return {
          //       title: catId
          //     };
          // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetail}
            options={{
              headerRight: () => {
                return(<Text>In the header</Text>)
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light"/>
    </SafeAreaView>
  );
}