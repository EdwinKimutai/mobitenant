import { View, Text } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

const Payment = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "PAYMENT" }} />
      <View>
        <Text>PAYMENT</Text>
      </View>
    </View>
  );
};

export default Payment;
