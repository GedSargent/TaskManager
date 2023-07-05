import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = React.useState("");
  const [goals, setGoals] = React.useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
    // setEnteredGoalText("");
  }

  function clearTasksHandler() {
    setGoals([]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your task description"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button onPress={addGoalHandler} title="Add Task" />
      </View>
      <View style={styles.goalsContainer}>
        {goals.length > 0 ? (
          <ScrollView>
            <View style={styles.clearButtonContainer}>
              <Button
                onPress={clearTasksHandler}
                title="Clear tasks"
                color="red"
              />
            </View>
            {goals.map((goal, index) => (
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text>Please enter your first task...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
  goalsContainer: {
    flex: 5,
  },
  clearButtonContainer: {
    marginBottom: 16,
  },
});
