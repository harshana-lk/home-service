import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessLIstItem from "./BusinessLIstItem";

export default function BookingListByCategory() {
  const param = useRoute().params;

  const navigation = useNavigation();

  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    console.log("Category", param.category);
    param && getBusinessList();
  }, [param]);

  const getBusinessList = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 30,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
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
        <Text style={{ fontFamily: "outfit-medium", fontSize: 24 }}>
          {param.category}
        </Text>
      </TouchableOpacity>

      {businessList.length > 0 ? (
        <FlatList
          data={businessList}
          renderItem={({ item, index }) => {
            return <BusinessLIstItem business={item} />;
          }}
        />
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              textAlign: "center",
              marginTop: "60%",
            }}
          >
            No Business Found
          </Text>
        </View>
      )}
    </View>
  );
}
