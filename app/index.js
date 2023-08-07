import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import {
  ChartRoom,
  Complaines,
  NoticeBoard,
  Payment,
  RequestExtention,
  Mobitenant,
} from "../components";
import styles from "../style/style";
const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerLeft: () => <Mobitenant />,
          headerLeft: () => <Mobitenant />,
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <TouchableOpacity style={[styles.container, styles.Btn]}>
              <NoticeBoard />
            </TouchableOpacity>
            <TouchableOpacity>
              <ChartRoom />
            </TouchableOpacity>
            <TouchableOpacity>
              <Payment />
            </TouchableOpacity>
            <TouchableOpacity>
              <RequestExtention />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
