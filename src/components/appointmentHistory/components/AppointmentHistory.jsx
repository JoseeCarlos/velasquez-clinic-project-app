import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AppointmentHistoryScreen = ({ appointments }) => {
  const renderAppointment = ({ item }) => {
    return (
      <View style={styles.appointmentContainer}>
        <View style={styles.appointmentInfo}>
          <Text style={styles.appointmentName}>{item.name}</Text>
          <View style={styles.appointmentDateTime}>
            <Text style={styles.appointmentDate}>{item.date}</Text>
            <Text style={styles.appointmentTime}>{item.time}</Text>
          </View>
        </View>
        <View style={styles.appointmentStatus}>
          <FontAwesome name="check-circle" size={24} color="#6BBE9C" />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Citas</Text>
      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  appointmentContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20,
  },
  appointmentInfo: {
    flex: 1,
    marginRight: 20,
  },
  appointmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  appointmentDateTime: {
    flexDirection: 'row',
  },
  appointmentDate: {
    fontSize: 16,
    marginRight: 10,
  },
  appointmentTime: {
    fontSize: 16,
  },
  appointmentStatus: {},
});

export default AppointmentHistoryScreen;