import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  View,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function SocialLinks(props) {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.socialLinksContainer}>
      {/* Twitter Follow Button  */}
      <TouchableOpacity
        style={styles.twitter}
        onPress={() =>
          handlePress(
            "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Freactnative.dev%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ereactnative&region=follow_link&screen_name=reactnative"
          )
        }
        accessibilityLabel="Follow @reactnative on X"
      >
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faXTwitter} size={15} color="white" />
        </View>
        <Text style={styles.label}>
          Follow <Text style={styles.bold}>@reactnative</Text>
        </Text>
      </TouchableOpacity>

      {/* Github Page Button */}
      <TouchableOpacity
        style={styles.github}
        onPress={() => handlePress("https://github.com/facebook/react-native")}
        accessibilityLabel="Follow @reactnative on X"
      >
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faStar} size={15} color="black" />
        </View>
        <Text style={[styles.label, { color: "black" }]}>Star</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  socialLinksContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // This will space out the buttons
    height: 50,
    marginHorizontal: 4,
  },
  twitter: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#000",
    borderRadius: 20,
    height: 30,
    width: 180, // Set your desired width here
    marginHorizontal: 5, // Add some horizontal margin between buttons
  },
  github: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#eef2f5",
    borderRadius: 4,
    height: 30,
    width: 70, // Set your desired width here
    marginHorizontal: 5, // Add some horizontal margin between buttons
  },
  iconContainer: {
    marginRight: 5,
  },
  label: {
    color: "white",
    fontSize: 15,
  },
});

export default SocialLinks;
