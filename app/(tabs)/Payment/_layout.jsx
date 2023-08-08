import { Stack } from "expo-router";

const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Payment" }} />
    </Stack>
  );
};
export default stackLayout;
