import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
