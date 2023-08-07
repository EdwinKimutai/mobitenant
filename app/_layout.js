import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
