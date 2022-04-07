import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import PeliculasScreen from './PeliculasScreen';
import SeriesScreen from './SeriesScreen';
import EstrenosScreen from './EstrenosScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
       initialRouteName={'Critic'}
       tabBarOptions={{
          activeTintColor: '#ffff',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#24365A',
          inactiveBackgroundColor: '#233441',
              style: {
                    backgroundColor: '#CE4418',
                    paddingBottom: 3
              }
       }}
      screenOptions={({ route }) => ({
    
        tabBarIcon: ({ focused, color, size,  }) => {
          let iconName;

          if (route.name === 'Peliculas') {
            iconName = focused
              ? 'movie'
              : 'movie'
          } else if (route.name === 'Series') {
            iconName = focused ? 'tv' : 'tv';
          } else if (route.name === 'Estrenos') {
            iconName = focused ? 'new-releases' : 'new-releases';
          }
          return (<MaterialIcons name={iconName} size={size} color={color} />


          );
        },
      })}>
        <Tab.Screen name="Peliculas" component={PeliculasScreen}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Tab.Screen name="Series" component={SeriesScreen}
        options={{headerStyle: {backgroundColor: '#1E2E3C'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}  />
        <Tab.Screen name="Estrenos" component={EstrenosScreen} 
        options={{headerStyle: {backgroundColor: '#1E2E3C'},
        headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>

      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
