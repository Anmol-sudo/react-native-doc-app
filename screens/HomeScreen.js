import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Animated,
} from "react-native";

import AnnouncementBar from "../components/AnnouncementBar";
import HeaderBar from "../components/HeaderBar";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import ImageBanner from "../components/FeatureCard/components/ImageBanner";
import HeroSection from "../components/HeroSection";

function HomeScreen(props) {
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 35],
    outputRange: [0, -35],
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: [0, -40],
    extrapolate: "clamp",
  });

  // Assuming AnnouncementBar height is 35 and HeaderBar height is 40
  const viewHeight = 75;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.headerContainer,
          { height: viewHeight, transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <Animated.View style={{ transform: [{ translateY: translateY }] }}>
          <AnnouncementBar />
        </Animated.View>
        <HeaderBar />
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <FeatureCard />
        <HeroSection />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1d", // Add a background color to prevent content from showing through
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: "#1b1b1d", // Add a background color to prevent content from showing through
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 63.75 + 35, // Adjust this value based on the combined height of AnnouncementBar and HeaderBar
  },
});

export default HomeScreen;
