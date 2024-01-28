import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import PageHeading from "../../Component/PageHeading";
import CalendarPicker from "react-native-calendar-picker";
import { Ionicons } from "@expo/vector-icons";
import { now } from "moment";
import { useNavigation } from "@react-navigation/native";
import Heading from "../../Component/Heading";

export default function BookingModel({ hideModel }) {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState([]);
  const [note, setNote] = useState();
  const [timeList, setTimeList] = useState([]);

  useEffect(() => {
    getTime();
  }, []);
  const getTime = () => {
    const timeList = [];

    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeList(timeList);
  };

  const navigation = useNavigation();
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{
          padding: 20,
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => hideModel()}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            //   marginBottom: 30,
          }}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={32}
            color="black"
          />
          <Text style={{ fontFamily: "outfit-medium", fontSize: 24 }}>
            Booking
          </Text>
        </TouchableOpacity>
        <View style={styles.calenderContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={370}
            minDate={Date.now()}
            selectedDayColor="black"
            selectedDayTextColor="white"
          />
        </View>

        <View>
          <Heading text="Select Time" />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                  setSelectedTime(item.time);
                }}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Heading text="Any Suggestions" />
          <TextInput
            placeholder="Note"
            style={styles.textInput}
            onChange={(text) => {
              setNote(text);
            }}
          />
        </View>

        <TouchableOpacity style={{ marginTop: 15 }}>
          <Text style={styles.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calenderContainer: {
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 10,
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    paddingHorizontal: 18,
    fontFamily: "outfit-medium",
    textAlign: "center",
  },

  selectedTime: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    paddingHorizontal: 18,
    fontFamily: "outfit-medium",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    height: 150,
    textAlignVertical: "top",
    padding: 10,
    fontFamily: "outfit",
    fontSize: 16,
  },
  confirmBtn: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "outfit-medium",
    padding: 15,
    textAlign: "center",
    borderRadius: 15,
    elevation: 2,
  },
});
