import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { List } from "react-native-paper"; // Import from react-native-paper
import Icon from "react-native-vector-icons/FontAwesome";

const mockData = {
  "01234-5678-90": {
    name: "Metformin 500 mg",
    time: ["2023-11-05-01:03:32"],
  },
  "19840-8964-11": {
    name: "sacubtrl/valsartan 49mg/51mg",
    time: ["2023-11-05-01:28:47"],
  },
};

export default function DrugAllergies({ navigation, route }) {
  //const { data } = route.params;
  const [drugsList, setDrugsList] = useState(mockData);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("ngrok-skip-browser-warning", "true");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://881a-129-110-241-55.ngrok-free.app/drugs`, requestOptions)
      .then((response) => response.json())
      .then((result) => setDrugsList(result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!drugsList) {
    return <Text>Loading...</Text>;
  }

  // Function to handle taking the drug
  const handleTakeDrug = () => {
    // Implement what happens when the drug is taken
  };

  // Function to handle going back to the main page
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      {Object.keys(drugsList).map((drug, i) => (
        <List.Item
          key={i}
          title={drugsList[drug].name}
          description={drugsList[drug].time}
          left={(props) => <List.Icon {...props} icon="pill" />}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16, // Adds space at the bottom
  },
  button: {
    flex: 1, // Each button will take up equal space
    marginHorizontal: 8, // Adds space between the buttons
  },
});
