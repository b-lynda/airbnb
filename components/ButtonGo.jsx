import { Pressable, Text, StyleSheet } from "react-native";

const ButtonGo = ({ text }) => {
  return (
    <Pressable style={styles.button}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderColor: "pink",
    width: 80,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ButtonGo;
