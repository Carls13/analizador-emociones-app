import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeView } from "../../views/home/home.view";
import { RecordView } from "../../views/record/record.view";
import { NavigationContainer } from '@react-navigation/native';
import { ResultsView } from "../../views/results/results.view";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Record" component={RecordView} />
        <Stack.Screen name="Results" component={ResultsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}