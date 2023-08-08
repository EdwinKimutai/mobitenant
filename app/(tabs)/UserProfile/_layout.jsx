import { Stack } from "expo-router";

const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "User Profile" }} />
    </Stack>
  );
};
export default stackLayout;
