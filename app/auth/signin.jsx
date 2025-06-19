import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Input from "../../components/TextInput";
import ButtonGo from "../../components/ButtonGo";
import Redirect from "../../components/Redirect";
import { useState } from "react";


const signinScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  
  const fetchData = async () => {
    try {
      const response = await axios.post("https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        email,
        password,
      )
      login({id:response.data.id, token: response.data.token})
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Logo />
        <Title title="Sign In" />
        <Input placeholder="email" state={email} setState={setEmail} />
        <Input
          placeholder="password"
          state={password}
          setState={setPassword}
          secure={true}
        />
        <ButtonGo text="Sign In" onPressFunc={fetchData} />
        <Redirect href="/signup" text="No Account ? Register" />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    // marginTop: 40,
    // marginBottom: 50,
  },
});

export default signinScreen;
