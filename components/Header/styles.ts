import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
  },
  avatarImg: {
    width: 50,
    height: 50,
  },
  notoficationImg: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
