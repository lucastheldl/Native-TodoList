import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Clipboard, PlusCircle } from "lucide-react-native";
import { Task } from "../../components/task/Task";

export function Home() {
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
        />
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.7}>
          <Text>
            <PlusCircle size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusForm}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.CompletedText}>Concluídas</Text>
      </View>

      <View style={styles.taskList}>
        <Task />
        <Task />
        <Task />
        {/* <Clipboard size={60} color="#333333" />
        <Text style={styles.taskEmptyText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.taskInfoText}>
          Crie tarefas e organize seus itens a fazer
        </Text> */}
      </View>
    </View>
  );
}
