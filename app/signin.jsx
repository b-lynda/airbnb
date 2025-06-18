import { View } from "react-native";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Input from "../components/TextInput";
import { useState } from "react";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const signinScreen = () => {
  return (
    <View>
      <Logo />
      <Title title="Sign In" />
      <Input placeholder="email" state={email} setState={setEmail}  />
      <Input placeholder="password" state={password} setState={setPassword} secure={true} />
    </View>
  );
};

export default signinScreen;
