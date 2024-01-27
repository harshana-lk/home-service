import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Component/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
      <Heading text={"Offers For You"} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                source={{ uri: item?.image?.url }}
                style={styles.sliderImage}
              />
            </View>
          );
        }}
      />
      {/* <Text>Nemro</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },

  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "fill",
    // padding: 0,
  },
});
