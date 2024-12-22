import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

function HeroSection(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

    if (!fontsLoaded) {
      return <ActivityIndicator size="small" color="#0000ff" />;
    }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Create native apps for Android, iOS, and more using React
      </Text>
      <Text style={styles.content}>
        React Native brings the best parts of developing with React to native
        development. It's a best-in-class JavaScript library for building user
        interfaces.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 430,
    backgroundColor: "#18181a",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    borderColor: "transparent",
    width: "92%",
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontFamily: "Montserrat_700Bold",
    paddingBottom: 20,
  },
  content: {
    fontFamily: "Montserrat_700Bold",
    color: "#c0c1c4",
    maxWidth: 850,
    marginTop: 16,
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "150%",
    width: "90%",
    textAlign: "center",
  },
});

export default HeroSection;
