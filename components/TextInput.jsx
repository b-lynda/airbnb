import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, state, setState, secure }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={state}
      onChangeText={setState}
      autoCapitalize="none"
      secureTextEntry={secure}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    heigh:50,
    borderBottomColor: "pink",
    borderBottomWidth: 2,
    fontSize: 16,
    width: "80%",
  },
});
export default Input;
