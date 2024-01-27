import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function BusinessListItemSmall({ business }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View>
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 18, marginBottom: 5 }}
        >
          {business?.name}
        </Text>
        <Text style={{ fontFamily: "outfit" }}>{business?.contactPerson}</Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            backgroundColor: "black",
            color: "white",
            padding: 3,
            borderRadius: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 7,
            marginTop: 4,
          }}
        >
          {business?.category?.name}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 18 }}>
          ⭐⭐⭐⭐⭐
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
    marginRight: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    marginRight: 20,
    padding: 10,
  },
});
