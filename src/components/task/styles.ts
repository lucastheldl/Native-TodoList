import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  textView: {
    flex: 1,
    overflow: "hidden",
  },
  taskTitle: {
    color: "#C4C4CC",
    fontSize: 15,
  },
  completedTaskTitle: {
    color: "#C4C4CC",
    textDecorationLine: "line-through",
  },
  deleteBtn: {},
});
