import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import Index from './pages';
import Constants from 'expo-constants';
import Storybook from './.storybook';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Markets from './pages/Markets';
import Search from './pages/Search';



// Main Entry point of the App
function App() {
  const BottomTab = createMaterialBottomTabNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Markets"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor:"#5d3fd3"}}
        >
          <BottomTab.Screen 
          name="Index" 
          component={Index} 
          options ={{
            tabBarLabel: "Index",
            tabBarColor: "violet",
            tabBarIcon: () => (
              <EntypoIcon name="list" size={26}/>
            ),
            }}
          />
          <BottomTab.Screen 
          name="Markets" 
          component={Markets} 
          options ={{
            tabBarLabel: "Markets",
            tabBarColor: "violet",
            tabBarIcon: () => (
              <EntypoIcon name="area-graph" size={26} />
            ),
          }}
          />
          <BottomTab.Screen 
            name=" " 
            component={Search}
            options ={{
              tabBarLabel: "Search",
              tabBarColor: "violet",
              tabBarIcon: () => (
                <FeatherIcon name="search" size={26} />
              ),
            }} 
          
          
          />
        </BottomTab.Navigator>
      </NavigationContainer>
      
    </PaperProvider>
  );
}

export default Constants.expoConfig?.extra?.storybookEnabled ? Storybook : App;


