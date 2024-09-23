import { useRouter } from "expo-router";
import { View, Text, Image, TextInput } from "react-native";
import UniversalBtn from "../components/UniversalBtn";
const Signup = () => {
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
          placeholder="Enter Your Name"
          onChangeText={(value) => console.log(value)}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={(value) => console.log(value)}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          placeholder="Create Your Password"
          onChangeText={(value) => console.log(value)}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
        <TextInput
          placeholder="Confirm Password"
          onChangeText={(value) => console.log(value)}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            paddingHorizontal: 20,
          }}
        />
      </View>

      <View
        style={{
          gap: 15,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <UniversalBtn
          text="Register"
          textColor="#fff"
          bgColor="#3f4a5f"
          onPress={() => handlePress("Signup")}
        />
        <UniversalBtn
          text="Login"
          textColor="#fff"
          bgColor="#4180fe"
          onPress={() => handlePress("Login")}
        />
      </View>
    </View>
  );
};

export default Signup;
