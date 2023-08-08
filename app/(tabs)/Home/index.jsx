import { Link, Redirect } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Mobitenant, Track, NoticeBoard } from "../../../components";

function Home() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Mobitenant />
        </View>
        <View>
          <Track />
        </View>
        <View>
          <NoticeBoard />
          <Link href="/Payment">Payment</Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
