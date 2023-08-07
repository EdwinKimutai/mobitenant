import Tabs from "expo-router/tabs";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ headerShown: false }} />
      <Tabs.Screen name="List" />
    </Tabs>
  );
};
