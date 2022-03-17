import React from "react";
import { View, StyleSheet, Text } from "react-native";

function EventsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Events</Text>
      <View>
        <Text> List of Events </Text>
        <View>
          <Text>The Bali Roadmap!</Text>
          <Text>World Wilflife Fund for Nature!</Text>
          <Text>The Nature Conservancy!</Text>
          <Text>Friends of the Earth!</Text>
          <Text>Global Green Growth Institute!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default EventsScreen;
