import { View, Text } from "react-native";
import { Clipboard } from "lucide-react-native";
import { styles } from "./styles";

export function NoTasks() {
  return (
    <View style={styles.taskEmptyText}>
      <Clipboard size={60} color="#333333" />
      <Text style={styles.taskInfoHeader}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.taskInfoText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
