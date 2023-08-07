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
//import  icons  from "react-icons";
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
      <View>
        <View>
          <TouchableOpacity>
            <TouchableOpacity>
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
