import { Stack, Link, useRouter } from "expo-router";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { icons } from "../../../constants";

const stackLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("UserProfile")}
            ></TouchableOpacity>
          ),
          headerLeft: () => <Text>MOBITENANT</Text>,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push("UserProfile");
              }}
            >
              <Image source={icons.Account} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};
export default stackLayout;
