import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Heading from "../../Component/Heading";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    GlobalApi.getCategories()
      .then((resp) => {
        console.log("resp", resp.categories);
        setCategories(resp?.categories);
      })
      .catch((error) => {
        console.log("Nermo", error);
      });
  };

  return (
    <View>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.push("business-list", { category: item.name });
              }}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: item?.icon?.url }}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 99,
  },
});
