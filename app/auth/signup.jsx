import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Input from "../components/TextInput";
import ButtonGo from "../components/ButtonGo";
import Redirect from "../components/Redirect";
import TextArea from "../components/TextArea";
import { useState } from "react";

const signupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Logo />
        <Title title="Sign In" />
        <Input placeholder="email" state={email} setState={setEmail} />
        <Input placeholder="username" state={username} setState={setUsername} />
        <TextArea
          multiline={true}
          placeholder="Describe yourself in a few words ..."
        />
        <Input
          placeholder="password"
          state={password}
          setState={setPassword}
          secure={true}
        />
        <Input
          placeholder="confir password"
          state={password}
          setState={setPassword}
          secure={true}
        />
        <ButtonGo text="Sign Up" />
        <Redirect href="/signin" text="Alwready have accoun ? Sign In" />
      </View>
      </KeyboardAwareScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    gap:14,
    marginTop:60,
  },
});
export default signupScreen;
