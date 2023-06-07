import { CheckCircle, Circle, Trash2 } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
//interfaces
import { iTask } from "../../screens/Home/index";

interface Props {
  task: iTask;
  titleText: string;
  handleTaskDeletion: (id: number) => void;
  handleEditTask: (task: iTask) => void;
}

export function Task({
  task,
  titleText,
  handleEditTask,
  handleTaskDeletion,
}: Props) {
  //const [completed, SetCompleted] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleEditTask(task)}
        activeOpacity={0.7}
      >
        {task.completed ? (
          <CheckCircle size={20} color="#4EA8DE" />
        ) : (
          <Circle size={20} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      <View style={styles.textView}>
        <Text
          style={!task.completed ? styles.taskTitle : styles.completedTaskTitle}
        >
          {titleText}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => handleTaskDeletion(task.id)}
        activeOpacity={0.7}
      >
        <Trash2 size={20} color="#C4C4CC" />
      </TouchableOpacity>
    </View>
  );
}
