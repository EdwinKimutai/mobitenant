import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Mobitenant.style";

function Mobitenant({ name, apartment, homeUrl }) {
  return (
    <TouchableOpacity>
      <View style={{ width: 10 }}>
        <Image source={homeUrl} />
      </View>
      <Text>Hi,{name}</Text>
      <Text>{apartment} APARTMENTS</Text>
    </TouchableOpacity>
  );
}

export default Mobitenant;
