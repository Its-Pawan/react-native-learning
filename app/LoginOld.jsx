import { View, Text, Image, TextInput, ScrollView } from "react-native";
import UniversalBtn from "../components/UniversalBtn";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const Login = () => {
  // state management ========

  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });

  useEffect(() => {
    console.log("calling blogs...");
  }, []);

  const handlePress = () => {
    if (value.value1 === "" || value.value2 === "") {
      alert("Please fill all the fields");
      return;
    }
    console.log(Number(value.value1) + Number(value.value2));
    alert(Number(value.value1) + Number(value.value2));
    setValue({
      value1: "",
      value2: "",
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
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
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value1: text }))
          }
          value={value.value1}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value2: text }))
          }
          value={value.value2}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value1: text }))
          }
          value={value.value1}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value2: text }))
          }
          value={value.value2}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value1: text }))
          }
          value={value.value1}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value2: text }))
          }
          value={value.value2}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value1: text }))
          }
          value={value.value1}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value2: text }))
          }
          value={value.value2}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value1: text }))
          }
          value={value.value1}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value2: text }))
          }
          value={value.value2}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value1: text }))
          }
          value={value.value1}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(text) => console.log(text)}
          onChangeText={(text) =>
            setValue((prev) => ({ ...prev, value2: text }))
          }
          value={value.value2}
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
          onPress={() => handlePress("Submit")}
        />
        <UniversalBtn
          text="Signup"
          textColor="#fff"
          bgColor="#3f4a5f"
          onPress={() => handlePress("Signup")}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
