import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Heading from "../../Component/Heading";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ProfileScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const onMessageBtnClick = () => {
    Linking.openURL(
      "mailto:harshuonlive@gmail.com" +
        "?subject=I'm looking for your Service&body=Hi There,"
    );
  };

  const { user } = useUser();
  return (
    <View style={{ backgroundColor: "white", padding: 20, height: "100%" }}>
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold", marginTop: 10 }}>
        Profile
      </Text>
      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 15 }}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 200, height: 200, borderRadius: 99, marginTop: 20 }}
        />
        <Text
          style={{ marginTop: 15, fontFamily: "outfit-medium", fontSize: 24 }}
        >
          {user?.fullName}
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>
          {user?.primaryEmailAddress.emailAddress}
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            marginBottom: 10,
            borderRadius: 15,
          }}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Ionicons name="home" size={24} color="black" />
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            marginBottom: 10,
            borderRadius: 15,
          }}
          onPress={() => {
            navigation.navigate("Bookings");
          }}
        >
          <Ionicons name="bookmark-sharp" size={24} color="black" />
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Bookings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onMessageBtnClick();
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            marginBottom: 10,
            borderRadius: 15,
          }}
        >
          <Ionicons name="mail" size={24} color="black" />
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Contact Us
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            marginBottom: 10,
            borderRadius: 15,
          }}
          onPress={() => {
            navigation.navigate("Logout");
          }}
        >
          <Ionicons name="log-out" size={24} color="black" />
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
