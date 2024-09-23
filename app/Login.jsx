import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const Login = () => {
  let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <ScrollView horizontal 
    showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.container}
    >
      {arr.map((item, index) => (
        <View key={index} style={styles.box}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    margin: 10,
    marginTop:100,
    borderRadius:10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
