import { Circle, Trash2 } from "lucide-react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";
import React from "react";

export function Task() {
  return (
    <View style={styles.container}>
      <Circle size={20} color="#4EA8DE" />
      <Text style={styles.taskTitle}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Trash2 size={20} color="#C4C4CC" />
    </View>
  );
}
