import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Component/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../BookingListByCategory/BusinessLIstItem";
import { useNavigation } from "@react-navigation/native";

export default function BookingScreen() {
  const naviagation = useNavigation();
  const { user } = useUser();

  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    user && getUserBookings();
  });

  const getUserBookings = async () => {
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        setBookingList(resp.bookings);
      }
    );
  };

  return (
    <View style={{ backgroundColor: "white", padding: 20, height: "100%" }}>
      <Heading text={"My Bookings"} />
      <View>
        <FlatList
          data={bookingList}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.businessList} />
          )}
        />
      </View>
    </View>
  );
}
