import { CheckCircle, Circle, Trash2 } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface Props {
  id: number;
  titleText: string;
  handleTaskDeletion: (id: number) => void;
}
export function Task({ id, titleText, handleTaskDeletion }: Props) {
  const [completed, SetCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => SetCompleted(!completed)}
        activeOpacity={0.7}
      >
        {completed ? (
          <CheckCircle size={20} color="#4EA8DE" />
        ) : (
          <Circle size={20} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={!completed ? styles.taskTitle : styles.completedTaskTitle}>
          {titleText}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => handleTaskDeletion(id)}
        activeOpacity={0.7}
      >
        <Trash2 size={20} color="#C4C4CC" />
      </TouchableOpacity>
    </View>
  );
}
