// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverScreen from './screens/MealsOverviewScreen';
import MealDetail from './screens/MealDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourites from './screens/Favourites';
import { Ionicons } from '@expo/vector-icons';
// import FavouritesContextProvider from './store/context/favourites-context';
import { store } from './store/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#351401'
      },
      headerTintColor: '#ccc',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25'
      },
      drawerContentStyle: {
        backgroundColor: '#351401',
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen name='Categories'
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => {
            return (
              <Ionicons name='list' color={color} size={size} />
            )
          }
        }}
        component={CategoriesScreen} />
      <Drawer.Screen name='Favourites' component={Favourites}
        options={{
          drawerIcon: ({color, size}) => {
            return (
              <Ionicons name='star' color={color} size={size} />
            )
          }
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
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
            <Stack.Screen name="MealsCategories" component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false
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
          </Provider>
        {/* </FavouritesContextProvider> */}
      <StatusBar style="light"/>
    </SafeAreaView>
  );
}