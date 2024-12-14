import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1b1b1d" }}>
      <HomeScreen />
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
