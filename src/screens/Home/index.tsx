import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {
  return (
    <View>
      <Image source={require("../../../assets/Logo.png")} />
      <View>
        <TextInput placeholder="Adicione uma nova tarefa" />
        <TouchableOpacity />
      </View>
      <View>
        <Text>Criadas</Text>
        <Text>Concluídas</Text>
      </View>
      <View></View>
    </View>
  );
}
