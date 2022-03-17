import React from "react";
import { View, StyleSheet, Text } from "react-native";

function WhyToSaveScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Why to Save the Environment</Text>
      <View>
        <Text> List of reasons </Text>
        <View>
          <Text>Trees provide oxygen/resources!</Text>
          <Text>
            Many plants and animals live in these habitats! Important source of
            food!
          </Text>
          <Text>Most clean water comes from fresh water lakes and river.</Text>
          <Text>Soil will be more fertile and more crops will grow!</Text>
          <Text>Keep the esosystems in balence!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default WhyToSaveScreen;
