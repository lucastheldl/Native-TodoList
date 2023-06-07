import {
  Image,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { PlusCircle } from "lucide-react-native";
import { useEffect, useState } from "react";
//components
import { Task } from "../../components/task/Task";
import { NoTasks } from "../../components/noTasks/NoTasks";

export interface iTask {
  id: number;
  titleText: string;
  completed: boolean;
}
export function Home() {
  const [tasks, setTasks] = useState<iTask[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [completedTasks, setCompletedTasks] = useState<iTask[]>([]);

  function handleCreateTask() {
    const task = {
      id: Math.random(),
      titleText: taskTitle,
      completed: false,
    };

    setTasks((prevState) => [...prevState, task]);
    setTaskTitle("");
  }

  function handleTaskDeletion(id: number) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function handleEditTask(task: iTask) {
    task.completed = !task.completed;

    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? (t = task) : t))
    );
    setCompletedTasks(tasks.filter((task) => task.completed));
  }
  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed));
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          style={styles.textInput}
          onChangeText={(text) => {
            setTaskTitle(text);
          }}
          value={taskTitle}
          maxLength={28}
        />
        <TouchableOpacity
          style={styles.addBtn}
          activeOpacity={0.7}
          onPress={handleCreateTask}
        >
          <Text>
            <PlusCircle size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusForm}>
        <View style={styles.status}>
          <Text style={styles.createdText}>Criadas</Text>
          <Text style={styles.amountCountText}>{tasks.length}</Text>
        </View>

        <View style={styles.status}>
          <Text style={styles.CompletedText}>Concluídas</Text>
          <Text style={styles.amountCountText}>{completedTasks.length}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Task
            task={item}
            titleText={item.titleText}
            handleTaskDeletion={handleTaskDeletion}
            handleEditTask={handleEditTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <NoTasks />}
        style={styles.taskList}
      ></FlatList>
    </View>
  );
}
