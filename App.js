import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
} from "react-native";

const DecimalToBinary = (props) => {
  const binaryNum = (props.number >>> 0).toString(2);
  const circle = Array.from(String(binaryNum), Number);

  return (
    <View>
      <Text style={styles.paragraph}>Binary number → {binaryNum}</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ flexDirection: "row" }}
        horizontal={true}
      >
        {circle.map((value, index) => (
          <Circle key={index} bit={value} />
        ))}
      </ScrollView>
    </View>
  );
};

const Circle = (props) => {
  return (
    <View>
      <View style={props.bit ? styles.fullCircle : styles.emptyCircle} />
    </View>
  );
};

export default function App() {
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digit a number"
        keyboardType="numeric"
      />
      <DecimalToBinary number={number} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paragraph: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  fullCircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "black",
  },
  emptyCircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderColor: "black",
    borderWidth: 5,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
