import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";

// Your existing components
import MainApp from "./views/MainApp";
import DrugScanner from "./views/DrugScanner";
import DrugInfo from "./views/DrugInfo";
import DrugOptions from "./views/DrugOptions";
import DrugAllergies from "./views/DrugAllergies";

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
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
          <Stack.Screen
            name="DrugOptions"
            component={DrugOptions}
            options={{ title: "My Medicine" }}
          />
          <Stack.Screen
            name="DrugAllergies"
            component={DrugAllergies}
            options={{ title: "My Drug Allergies" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
