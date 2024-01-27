import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BusinessListByCategory from "../Screens/BookingListByCategory/BookingListByCategory";
import BusinessDetailsScreen from "../Screens/BusinessDetailsScreen/BusinessDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-list" component={BusinessListByCategory} />
      <Stack.Screen name="business-details" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  );
}
