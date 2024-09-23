import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="Login" options={{ title: "LongIn" }} />
      <Stack.Screen name="Signup" options={{ title: "SignUp" }} />
    </Stack>
  );
};
export default RootLayout;
