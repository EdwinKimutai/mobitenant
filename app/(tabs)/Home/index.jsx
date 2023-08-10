import { Link, Redirect, useRouter } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Mobitenant, Track, NoticeBoard } from "../../../components";
import { images } from "../../../constants";

function Home() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Mobitenant name="Edwin" apartment="Kwetu homes" homeUrl={images.Home} />

      <Track />

      <Link href="NoticeBoard2" asChild>
        <Pressable>
          <Text>Notice Board</Text>
        </Pressable>
      </Link>
      <Link href="/Notifications/1" asChild>
        <Pressable>
          <Text>Chartroom</Text>
        </Pressable>
      </Link>
      <Link href="/Payment" asChild>
        <Pressable>
          <Text>Pay rent</Text>
        </Pressable>
      </Link>
      <Link href="/" asChild>
        <Pressable>
          <Text>Extend RD</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

export default Home;
