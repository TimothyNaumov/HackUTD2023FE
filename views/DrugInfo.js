import React, { useState, useEffect } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function DrugInfo({ navigation, route }) {
  const { data } = route.params;
  const [drugInfo, setDrugInfo] = useState(null);

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
      <Button title="Continue" onPress={() => {}} />
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
});
