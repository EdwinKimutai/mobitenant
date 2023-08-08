import Tabs from "expo-router/tabs";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ headerShown: false }} />
      <Tabs.Screen name="ChartRoom" options={{ headerShown: false }} />
      <Tabs.Screen name="Payment" options={{ headerShown: false }} />
      <Tabs.Screen name="UserProfile" options={{ headerShown: false }} />
    </Tabs>
  );
};
