import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function List() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/List/1">new one</Link>
      <Link href="/List/2">new two</Link>
      <Link href="/List/3">new three</Link>
    </View>
  );
}

export default List;
