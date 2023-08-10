import { Stack, Link } from "expo-router";
import { Text } from "react-native";
const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerRight: () => <Link href="/Notifications/1">Chart Room</Link>,
          headerLeft: () => <Text>Notice Board</Text>,
        }}
      />
    </Stack>
  );
};
export default stackLayout;
