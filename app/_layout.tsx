import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1e7ef4",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // headerShown: false, // to hide navigation bar
      }}
    >
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      /> */}
    </Stack>
  );
};
export default RootLayout;
