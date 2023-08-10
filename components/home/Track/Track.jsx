import React from "react";
import { Pressable, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { Button } from "react-native";

function Track() {
  const router = useRouter();
  const handlePress = () => {
    router.push("Payment");
  };
  return (
    <View>
      <Button onPress={handlePress} title="PAY RENT" />
      <View></View>
    </View>
  );
}

export default Track;
