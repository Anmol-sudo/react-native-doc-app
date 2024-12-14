import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

function AnnouncementBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          The New Architecture has arrived -{" "}
          <Text
            style={[
              styles.text,
              { color: "#61DAFB", textDecorationLine: "underline" },
            ]}
            onPress={() =>
              Linking.openURL(
                "https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here"
              )
            }
          >
            learn more
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20232a",
    height: 35,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 6,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default AnnouncementBar;
