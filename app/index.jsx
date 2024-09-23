import { View, Text } from "react-native";
import React from "react";
import UniversalBtn from "../components/UniversalBtn";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

   
  const handlePress = (text) => {
    if (text === "Login") {
      router.navigate("Login"); // Navigate to the Login screen
    } else if (text === "Signup") {
      router.navigate("Signup"); // Navigate to the Signup screen
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 15,
      }}
    >
      <UniversalBtn
        text="Login"
        textColor="#fff"
        bgColor="#4180fe"
        onPress={() => handlePress("Login")}
      />
      <UniversalBtn
        text="Signup"
        textColor="#fff"
        bgColor="#3f4a5f"
        onPress={() => handlePress("Signup")}
      />
    </View>
  );
};

export default index;
