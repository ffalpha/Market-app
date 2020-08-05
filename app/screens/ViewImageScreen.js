import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeicon}>
        <MaterialCommunityIcons name="close" color="white" size={20} />
      </View>
      <View style={styles.deleteicon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={20}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/couch.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeicon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },

  deleteicon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
