import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Header from "../header/main";
import AppointmentHistoryScreen from "./components/AppointmentHistory";

const appointments = [
  {
    id: "1",
    name: "Dr. Juan Pérez",
    date: "22/04/2022",
    time: "10:30 AM",
  },
  {
    id: "2",
    name: "Dr. Ana García",
    date: "26/04/2022",
    time: "3:00 PM",
  },
  {
    id: "3",
    name: "Dr. Carlos Ramírez",
    date: "28/04/2022",
    time: "9:00 AM",
  },
];

const AppointmentHistoryPage = () => {
  return (
    <View style={styles.container}>
      <Header title="Hitorial de atenciones" />
      <View style={styles.content}>
        <AppointmentHistoryScreen appointments={appointments} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#6BBE9C",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
});

export default AppointmentHistoryPage;
