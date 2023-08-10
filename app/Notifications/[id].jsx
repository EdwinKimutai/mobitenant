import { Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const DetailPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "ChartRoom",
        }}
      />
      <Text>Notifications</Text>
    </View>
  );
};
export default DetailPage;
