import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Your existing components
import MainApp from "./views/MainApp";
import DrugScanner from "./views/DrugScanner";
import DrugInfo from "./views/DrugInfo";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ title: "Patient Protect" }}
        />
        <Stack.Screen
          name="DrugScanner"
          component={DrugScanner}
          options={{ title: "Drug Scanner" }}
        />
        <Stack.Screen
          name="DrugInfo"
          component={DrugInfo}
          options={{ title: "Drug Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
