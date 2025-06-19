import { Pressable, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Redirect = ({ text, href }) => {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text>{text}</Text>
      </Pressable>
    </Link>
  );
};

export default Redirect;