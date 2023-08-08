import { Stack, Link } from "expo-router";
import { View, Text } from "react-native";

const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "MOBITENANT",
          headerRight: () => <Link href="/Notifications/1">noti</Link>,
        }}
      />
    </Stack>
  );
};
export default stackLayout;
