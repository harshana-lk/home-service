import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text>Welocme,</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome
            name="bookmark-o"
            size={30}
            color="black"
            fontWeight="bold"
          />
        </View>

        {/* SearchBar */}
        <View style={styles.profileSearchBar}>
          <TextInput placeholder="Search" />
          <FontAwesome name="search" size={24} color="black" />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingTop: 40,
    borderColor: Colors.BLACK,
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
    marginTop: 20,
  },

  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileSearchBar: {
    display: "flex",
    flexDirection: "row",
    color: Colors.BLACK,
    width: "90%",
    borderWidth: 1,
    borderColor: Colors.BLACK,
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "space-between",
    marginLeft: 17,
  },

  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
