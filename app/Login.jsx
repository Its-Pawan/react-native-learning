import { View, Text, Image, TextInput } from "react-native";
import UniversalBtn from "../components/UniversalBtn";
import { useRouter } from "expo-router";

const Login = () => {
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
      }}
    >
      <Image
        source={require("@/assets/images/img.jpg")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
        }}
      />
      <View style={{ padding: 20, gap: 20 }}>
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(text) => console.log(text)}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View
        style={{
          gap: 15,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
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
    </View>
  );
};

export default Login;
