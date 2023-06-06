import {
  Image,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Clipboard, PlusCircle } from "lucide-react-native";
import { Task } from "../../components/task/Task";
import { useState } from "react";

interface Task {
  id: number;
  titleText: string;
  completed: boolean;
}
export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleCreateTask() {
    const task = {
      id: Math.random(),
      titleText: taskTitle,
      completed: false,
    };

    setTasks((prevState) => [...prevState, task]);
  }

  function handleTaskDeletion(id: number) {}

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
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.CompletedText}>Concluídas</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Task
            id={1}
            titleText={item.titleText}
            handleTaskDeletion={handleTaskDeletion}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Clipboard size={60} color="#333333" />
            <Text style={styles.taskEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.taskInfoText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        style={styles.taskList}
      ></FlatList>
    </View>
  );
}
