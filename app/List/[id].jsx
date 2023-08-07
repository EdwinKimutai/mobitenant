import { Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const DetailPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: `Details of ${id}`,
        }}
      />
      <Text>My details from :{id}</Text>
    </View>
  );
};
export default DetailPage;
