import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default function MainApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Take Medication"
        onPress={() => navigation.navigate("DrugScanner")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
