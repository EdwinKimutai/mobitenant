import { Stack } from "expo-router";

const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Chart Room" }} />
    </Stack>
  );
};
export default stackLayout;
