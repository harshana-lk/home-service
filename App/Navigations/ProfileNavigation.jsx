import { View, Text } from "react-native";
import React, { Profiler } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import Login from "../Screens/LoginScreen/Login";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="Bookings" component={BookingScreen} />
      <Stack.Screen name="Logout" component={Login} />
    </Stack.Navigator>
  );
}
