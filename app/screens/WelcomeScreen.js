import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Appbutton from "../componets/Appbutton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/bg.jpg")}
    >
      <View style={styles.logocontianer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={{ backgroundColor: "gold" }}>
          Say waht you you want to buy
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Appbutton title="Login"></Appbutton>
        <Appbutton title="Regsiter" color="secondary"></Appbutton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocontianer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
export default WelcomeScreen;
