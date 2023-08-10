import Tabs from "expo-router/tabs";
import { Image } from "react-native";
//import HomeIcon from "@mui/icons-material/Home";
import { icons } from "../../constants";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="UserProfile"
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Image source={icons.Profile} />;
          },
        }}
      />
      <Tabs.Screen
        name="NoticeBoard2"
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Image source={icons.NoticeBoard} />;
          },
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,

          tabBarIcon: () => {
            return <Image source={icons.HomeIC} />;
          },
        }}
      />
      <Tabs.Screen
        name="Payment"
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Image source={icons.Payment} />;
          },
        }}
      />
    </Tabs>
  );
};
