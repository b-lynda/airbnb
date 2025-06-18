import { Image, StyleSheet, View } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/logoairbnb.png")}
        style={styles.logo}
        resizeMode="contain"
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { with: 100, height: 100 },
});
export default Logo;
