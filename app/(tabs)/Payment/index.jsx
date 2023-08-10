import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { icons } from "../../../constants";

const Payment = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.push("Home");
              }}
            >
              <Image source={icons.Left} />
            </TouchableOpacity>
          ),
        }}
      />
      <View>
        <Text>PAYMENT</Text>
      </View>
    </View>
  );
};

export default Payment;
