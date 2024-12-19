import React from "react";
import { View, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import SocialLinks from "./components/SocialLinks";
import MainBanner from "./components/MainBanner";
import ImageBanner from "./components/ImageBanner";

function FeatureCard(props) {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <SocialLinks />
          <MainBanner />
          <ImageBanner />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    height: 730,
    backgroundColor: "#1a1a1c",
  },
});

export default FeatureCard;
