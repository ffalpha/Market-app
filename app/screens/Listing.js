import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import ListItem from "../componets/ListItem";
export default function Listing() {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detaislcontianer}>
        <Text style={styles.title}>Kalana</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.user}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh hamedani"
            subtitle="5Listing"
          />
          <ListItem
            image={require("../assets/jacket.jpg")}
            title="Mosh hamedani"
            subtitle="5Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  detaislcontianer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 20,
  },
  user: {
    marginBottom: 20,
    marginVertical: 40,
  },
});
