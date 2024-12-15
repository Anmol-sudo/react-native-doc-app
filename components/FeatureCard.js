import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import SocialLinks from "./SocialLinks";

function FeatureCard(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <SocialLinks />
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Ionicons name="logo-react" size={107} color="#61DAFB" />
          </View>
          <Text
            style={[
              styles.text,
              {
                fontSize: 40,
                marginTop: 24,
                marginBottom: 8,
              },
            ]}
          >
            React Native
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 20,
              },
            ]}
          >
            Learn once, write anywhere.
          </Text>
          <View style={styles.buttonContainer}>
            {/* Primary Button  */}
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => alert("Get Started")}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>

            {/* Secondary Button  */}
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => alert("Get Started")}
            >
              <Text style={styles.secondaryButtonText}>Learn the Basics</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 900,
    backgroundColor: "#1b1b1d",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row", // Change this to row
    justifyContent: "center", // Center the buttons horizontally
    alignItems: "center", // Center the buttons vertically
    flexWrap: "wrap",
    marginTop: 16,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: "#58c4dc",
    borderRadius: 1584,
    flex: 0, // Remove flex: 1
    alignItems: "center",
    justifyContent: "center",
    gap: 5.6,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1b1b1d",
  },
  secondaryButton: {
    flex: 0, // Remove flex: 1
    paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 5.6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1584,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#4e5668",
    backgroundColor: "#1b1b1d",
  },
  secondaryButtonText: {
    fontSize: 17,
    fontWeight: 700,
    color: "white",
  },
});

export default FeatureCard;
