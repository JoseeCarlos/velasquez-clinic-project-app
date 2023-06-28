import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppointmentList from "./appointmenList/main";
import Header from "../header/main";

const PendingAppointments = ({navigation}) => {
  // datos de ejemplo para la lista de citas pendientes
  const appointments = [
    { id: "1", name: "Juan", date: "2023-05-05", time: "14:30" },
    { id: "2", name: "Maria", date: "2023-05-07", time: "16:00" },
    { id: "3", name: "Pedro", date: "2023-05-08", time: "10:00" },
  ];

  return (
    <View style={styles.container}>
      <Header title="Citas Pendientes" navigation={navigation} notificationCount={'3'} />
      <View style={styles.content}>
        <AppointmentList appointments={appointments} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    
  },
});

export default PendingAppointments;
