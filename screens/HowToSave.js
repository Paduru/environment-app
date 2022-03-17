import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HowToSaveScreen(props) {
  return (
    <View style={styles.container}>
      <Text> How to Save the Environment </Text>
      <View>
        <Text> List of Ideas </Text>
        <View>
          <Text>Recycle reusable items!</Text>
          <Text>Conserve electricity/water!</Text>
          <Text>Don't litter/Pick up litter!</Text>
          <Text>Replant trees/plant!</Text>
          <Text>Donate to environmental charities!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HowToSaveScreen;
