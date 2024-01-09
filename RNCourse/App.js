import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalInputVisible, setGoalInputVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((goals) => [
      ...goals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
      },
    ]);
    closeModal();
  }

  function deleteGoalHandler(key) {
    setCourseGoals((goals) => goals.filter((goal) => goal.key !== key));
  }

  function closeModal() {
    setGoalInputVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addGoalContainer}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={() => setGoalInputVisible((v) => !v)}
          />
        </View>
        <GoalInput
          closeModal={closeModal}
          onAddGoal={addGoalHandler}
          isGoalInputVisible={goalInputVisible}
        />
        <View style={styles.listOfGoalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  listOfGoalsContainer: {
    flex: 5,
  },
});
