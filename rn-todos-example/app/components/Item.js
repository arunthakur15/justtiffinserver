import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { lighterWhite } from "../utils/Colors";

const Item = ({ description, imgPath }) => (
  <View style={styles.itemContainer}>
    <Image
      style={{
        width: "100%",
        height: "60%"
      }}
      source={imgPath}
    />
    <Text
      style={{
        borderWidth: 2,
        borderColor: "#f00",
        borderRadius: 4,
        color: "#f00",
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
      ORDER NOW
    </Text>
    <Text>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    margin: 5,
    shadowColor: "#ccc",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2
  }
});

export default Item;
