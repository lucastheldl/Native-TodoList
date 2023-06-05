import { StatusBar } from "react-native";
import { View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
    </View>
  );
}
