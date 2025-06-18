import { Text, StyleSheet } from "react-native";

const Title = ({title}) => {
    return (
        <Text style={styles.text}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {color:"grey", fontWeight:600, fontSize:24},
})
export default Title;