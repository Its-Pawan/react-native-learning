import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ drawerLabel: "Home" }} />
        <Drawer.Screen name="about" options={{ drawerLabel: "About" }} />
        <Drawer.Screen name="profile" options={{ drawerLabel: "Settings" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
