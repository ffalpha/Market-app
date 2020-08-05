import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";
import ListItem from "../componets/ListItem";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
const message = [
  {
    id: 1,
    title: "T1",
    decription: "T1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    decription: "T2",
    image: require("../assets/mosh.jpg"),
  },
];
export default function Message() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.decription}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
