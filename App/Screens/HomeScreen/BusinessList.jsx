import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Component/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);
  const getBusinessList = () => {
    GlobalApi.getBusinessList()
      .then((resp) => {
        console.log("resp", resp.businessLists);
        setBusinessList(resp?.businessLists);
      })
      .catch((error) => {
        console.log("Nermo", error);
      });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Latest Business"} isViewAll={true} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem={({ item, index }) => {
          return (
            <View>
              <BusinessListItemSmall business={item} />
            </View>
          );
        }}
      />
    </View>
  );
}
