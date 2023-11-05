import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Card, Text, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const cardSize = windowWidth / 2 - 30; // Calculate the size based on the window width

const MainApp = () => {
  const navigation = useNavigation();
  const cardsData = [
    {
      title: "Check Medication",
      icon: "check-circle-outline",
      navigateTo: "DrugScanner",
    },
    { title: "Take Medication", icon: "pill", navigateTo: "TakeMedication" },
    {
      title: "Medication History",
      icon: "history",
      navigateTo: "MedicationHistory",
    },
    {
      title: "Drug Allergies",
      icon: "alert-circle-outline",
      navigateTo: "DrugAllergies",
    },
  ];

  const handlePress = (navigateTo) => {
    navigation.navigate(navigateTo);
  };

  return (
    <View style={styles.container}>
      {cardsData.map((card, index) => (
        <View key={index} style={styles.cardColumn}>
          <TouchableOpacity onPress={() => handlePress(card.navigateTo)}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Icon name={card.icon} size={40} style={styles.cardIcon} />
                <Title style={styles.cardTitle}>{card.title}</Title>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  cardColumn: {
    width: "50%",
    padding: 10,
  },
  card: {
    width: "100%",
    height: cardSize,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardIcon: {
    marginBottom: 8,
  },
  cardTitle: {
    textAlign: "center",
  },
});

/* 
<Button
  title="Take Medication"
  onPress={() => navigation.navigate("DrugScanner")}
/> 
*/
