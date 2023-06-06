import { Bold } from "lucide-react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    height: "100%",
    backgroundColor: "#1A1A1A",
  },
  banner: {
    position: "absolute",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: "100%",
    backgroundColor: "#0D0D0D",
  },
  form: {
    width: "90%",
    flexDirection: "row",
    gap: 5,
    marginTop: 120,
    marginHorizontal: 20,
  },
  statusForm: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#262626",
    marginHorizontal: 20,
  },
  createdText: {
    fontWeight: "bold",
    color: "#4EA8DE",
  },
  CompletedText: {
    fontWeight: "bold",
    color: "#5E60CE",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#262626",
    fontSize: 18,
    color: "#C4C4CC",
    padding: 15,
    borderRadius: 10,
  },
  addBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  taskList: {
    display: "flex",
    flexDirection: "column",

    marginHorizontal: 20,
    paddingVertical: 10,
  },
  taskEmptyText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#808080",
  },
  taskInfoText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    color: "#808080",
  },
});
