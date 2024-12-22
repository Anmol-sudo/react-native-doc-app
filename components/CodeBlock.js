import React from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  useFonts,
  SourceCodePro_500Medium,
  SourceCodePro_600SemiBold,
} from "@expo-google-fonts/source-code-pro";

function CodeBlock(props) {

  let [fontsLoaded] = useFonts({
    SourceCodePro_500Medium,
    SourceCodePro_600SemiBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#0000ff" />;
  }

  return (
    <LinearGradient
      colors={["#1e2127", "#2c3e50"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.featureContainer}
    >
      <View style={styles.codeEditor}>
        <View style={styles.codeEditorTitleContainer}>
          <Text style={styles.codeEditorTitle}>index.js</Text>
        </View>
        <View style={styles.codeEditorContentContainer}>
          <Text style={styles.pre}>
            function <Text style={{ color: "#A77CF7" }}>HomeScreen</Text>
            <Text style={{ color: "white" }}>() &#123;</Text>
            {"\n"}
            &emsp;<Text>return</Text>{" "}
            <Text style={{ color: "white" }}>{"\u0028"}</Text>
            {"\n"}
            &emsp;&emsp;
            <Text style={{ color: "white" }}>
              &lt;<Text style={{ color: "#74e68f" }}>View</Text>&gt;
            </Text>
            {"\n"}
            &emsp;&emsp;&emsp;
            <Text style={{ color: "white" }}>
              &lt;<Text style={{ color: "#74e68f" }}>Text</Text>&gt; Hello,
              World 👋 🌍!&lt;/<Text style={{ color: "#74e68f" }}>Text</Text>
              &gt;
            </Text>
            {"\n"}
            &emsp;&emsp;
            <Text style={{ color: "white" }}>
              &lt;<Text style={{ color: "#74e68f" }}>View</Text>&gt;
            </Text>
            {"\n"}
            &emsp;<Text style={{ color: "white" }}>{"\u0029"};</Text>
            {"\n"}
            <Text style={{ color: "white" }}>{"\u007D"}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.deviceContainer}>
        <Image
          style={{ width: "90%", height: "100%" }}
          source={{
            uri: "https://reactnative.dev/img/homepage/devices-dark.png",
          }}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  featureContainer: {
    flex: 1,
    borderWidth: 1,
    gap: 30,
    borderColor: "#404756",
    width: "95%",
    alignSelf: "center",
    borderRadius: 16,
    height: 730,
  },
  codeEditor: {
    backgroundColor: "#242426",
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#404756",
    position: "relative",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
  },
  codeEditorTitleContainer: {
    height: 57.05,
    justifyContent: "center",
    backgroundColor: "#2c2c2e",
    borderBottomWidth: 1,
    borderBottomColor: "#404756",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  codeEditorTitle: {
    fontFamily: "SourceCodePro_500Medium",
    fontSize: 24,
    color: "#c0c1c4",
  },
  codeEditorContentContainer: {},
  pre: {
    padding: 24,
    lineHeight: 25, // Adjust line height for better readability
    whiteSpace: "pre-wrap", // Preserve whitespace and wrap text
    // width: "100%",
    // height: 166.31,
    color: "#f46b78",
    fontSize: 16,
    fontFamily: "SourceCodePro_600SemiBold",
  },
  deviceContainer: {
    width: "100%",
    height: 400,
    alignItems: "center",
  },
});

export default CodeBlock;
