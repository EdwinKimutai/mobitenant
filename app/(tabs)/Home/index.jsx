import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function Home() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Link href="/Home/settings">settings</Link>
    </View>
  );
}

export default Home;
