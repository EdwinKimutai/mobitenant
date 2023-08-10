import { Stack } from "expo-router";
import { Image } from "react-native";
import { icons } from "../../../constants";

const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerLeft: () => <Image source={icons.Profile} />,
        }}
      />
    </Stack>
  );
};
export default stackLayout;
