import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";
export default function BusinessLIstItem({ business }) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{ uri: business?.images[0]?.url }}
          style={styles.image}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
            {business.contactPerson}
          </Text>

          <Text style={styles.business_name}>{business.name}</Text>

          <Text style={{ fontFamily: "outfit", fontSize: 14 }}>
            {business.address}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}
          >
            <MaterialCommunityIcons
              name="email-plus-outline"
              size={20}
              color="black"
            />
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 14,
              }}
            >
              {business.email}
            </Text>
          </View>
        </View>
        <MaterialIcons
          name="bookmark-border"
          size={34}
          color="black"
          style={{ marginLeft: "auto" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  business_name: {
    fontFamily: "outfit-medium",
    fontSize: 16,
    color: "white",
    backgroundColor: "black",
    alignSelf: "flex-start",
    borderRadius: 3,
    paddingHorizontal: 7,
  },
  container: {
    padding: 10,
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
