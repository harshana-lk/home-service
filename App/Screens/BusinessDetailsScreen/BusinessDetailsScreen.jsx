import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BookingModel from "./BookingModel";

export default function BusinessDetailsScreen() {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [isReadMore, setIsReadMore] = useState();
  const [showModel, setShowModel] = useState(false);
  const [business, setBusiness] = useState(param.business);
  useEffect(() => {}, []);
  return (
    business && (
      <View>
        <View
          style={{ paddingTop: 20, backgroundColor: "white", height: "93%" }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="chevron-back-circle-outline"
                size={35}
                color="black"
              />
            </TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  // alignItems: "center",
                  fontFamily: "outfit-medium",
                  fontSize: 24,
                  textAlign: "center",
                }}
              >
                {business?.contactPerson}
              </Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <Image
              source={{ uri: business?.images[0]?.url }}
              style={{
                width: "100%",
                height: 250,
                borderRadius: 20,
                objectFit: "cover",
              }}
            />
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <View>
              <Text style={{ fontFamily: "outfit-bold", fontSize: 26 }}>
                {business.name}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: "white",
                backgroundColor: "black",
                alignSelf: "flex-start",
                borderRadius: 3,
                paddingHorizontal: 7,
                fontSize: 16,
              }}
            >
              {business.category.name}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Entypo name="location-pin" size={24} color="black" />
              <Text
                style={{ fontFamily: "outfit", fontSize: 16, marginRight: 10 }}
              >
                {business.address}
              </Text>
              <MaterialCommunityIcons
                name="email-plus-outline"
                size={20}
                color="black"
              />
              <Text style={{ fontFamily: "outfit", fontSize: 16 }}>
                {business.email}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                marginTop: 10,
                marginBottom: 10,
                borderColor: "gray",
              }}
            ></View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 16,
                color: "gray",
                lineHeight: 25,
              }}
              numberOfLines={isReadMore ? 5 : 3}
            >
              {business.about}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsReadMore(!isReadMore);
              }}
            >
              <Text style={{ fontFamily: "outfit", fontSize: 16 }}>
                {isReadMore ? "Read Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.messageBtn}
            onPress={() => {
              Linking.openURL(`mailto:${business.email}`);
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bookingBtn}
            onPress={() => setShowModel(true)}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 18,
                color: "white",
                textAlign: "center",
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="fade" visible={showModel}>
          <BookingModel
            hideModel={() => setShowModel(false)}
            businessId={business.id}
          />
        </Modal>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  backBtn: {
    paddingLeft: 18,
  },

  footer: {
    backgroundColor: "white",
    height: "7%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    gap: 15,
    paddingLeft: 20,
    paddingRight: 20,
    // justifyContent: "space-between",
  },
  messageBtn: {
    padding: 5,
    borderBlockColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    flex: 1,
  },
  bookingBtn: {
    padding: 5,
    backgroundColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    flex: 1,
  },
});
