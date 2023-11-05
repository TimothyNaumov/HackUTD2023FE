import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { Button } from "react-native-paper"; // Import from react-native-paper
import Icon from "react-native-vector-icons/FontAwesome";

const mockData = {
  doctor: "Dan Healthy",
  dose: "1",
  expDate: "11/04/2025",
  freq1: 2,
  patient: "John Smith",
  per1: "day",
  rxDate: "11/04/2023",
  rxName: "Metformin 500 mg",
  rxQty: 60,
  unit: "Tablet",
};

export default function DrugInfo({ navigation, route }) {
  const { data } = route.params;
  const [drugInfo, setDrugInfo] = useState(mockData);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("ngrok-skip-browser-warning", "true");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://881a-129-110-241-55.ngrok-free.app/drugs/${data}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDrugInfo(result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!drugInfo) {
    return <Text>Loading...</Text>;
  }

  // Function to handle taking the drug
  const handleTakeDrug = () => {
    // Implement what happens when the drug is taken
    // Post to Alex that you took the drug
    Alert.alert(
      "Drug Taken",
      `You took ${
        drugInfo.rxName
      } at ${new Date().toLocaleString()}. This drug has been added to your medications`,
      [
        {
          text: "OK",
          onPress: () => {
            // Perform your action here
            navigation.navigate("MainApp");
          },
        },
      ]
    );
  };

  // Function to handle going back to the main page
  const handleGoBack = () => {
    navigation.navigate("MainApp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{drugInfo.rxName}</Text>
        <Icon name="check-circle" size={30} color="green" />
      </View>
      <Text style={styles.text}>
        No drug allergies or dangerous drug interactions found on your patient
        record
      </Text>
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={handleGoBack} style={styles.button}>
          Cancel
        </Button>
        <Button mode="contained" onPress={handleTakeDrug} style={styles.button}>
          Take Drug
        </Button>
      </View>
    </View>
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
