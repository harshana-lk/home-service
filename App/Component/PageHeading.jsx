import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function PageHeading({ title }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 30,
      }}
    >
      <Ionicons name="chevron-back-circle-outline" size={32} color="black" />
      <Text style={{ fontFamily: "outfit-medium", fontSize: 24 }}>{title}</Text>
    </TouchableOpacity>
  );
}
