import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";

function HeaderBar(props) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handleLogoPress = () => {
    rotateAnim.setValue(0);
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "560deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.navbar_items}>
        <TouchableOpacity
          style={[styles.navbar_icon, { marginEnd: 10 }]}
          onPress={() => console.log("Button pressed")}
        >
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
        <View style={styles.navbar_brand}>
          <TouchableOpacity onPress={handleLogoPress}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <Ionicons name="logo-react" size={35} color="#61DAFB" />
            </Animated.View>
          </TouchableOpacity>
          <Text style={styles.title}>React Native</Text>
        </View>
        <TouchableOpacity
          style={[styles.navbar_icon, { backgroundColor: "#1b1b1d" }]}
          onPress={() => console.log("Button pressed")}
        >
          <Ionicons name="search" size={20} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 63.75,
    backgroundColor: "#20232a",
  },
  navbar_items: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  navbar_icon: {
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    paddingInlineStart: 4
  },
  navbar_brand: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.35,
  },
  icon: {
    paddingLeft: "20%",
  },
});

export default HeaderBar;
