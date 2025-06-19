import { TextInput, StyleSheet } from "react-native";

const TextArea = ({ multiline, placeholder }) => {
  return (
    <TextInput
      multiline={multiline}
      placeholder={placeholder}
      style={styles.textarea}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  textarea: { borderWidth: 3, borderColor: "pink", width: "80%", height: 120, alignContent:"flex-start", justifyContent:"flex-start"},
});

export default TextArea;
