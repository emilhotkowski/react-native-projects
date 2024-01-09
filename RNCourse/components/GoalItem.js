import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#3F078A" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => (pressed ? styles.pressedItem : null)}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "#fff",
    padding: 8,
  },
});

export default GoalItem;
