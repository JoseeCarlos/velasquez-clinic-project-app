import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const AppointmentList = ({ appointments }) => {
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
          <Text style={styles.appointmentStatusLabel}>Pendiente</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={appointments}
      renderItem={renderAppointment}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10
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
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 20
    },
    appointmentInfo: {
        flex: 1,
        marginRight: 20
    },
    appointmentName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    appointmentDateTime: {
    flexDirection: 'row'
    },
    appointmentDate: {
        fontSize: 16,
        marginRight: 10
    },
    appointmentTime: {
        fontSize: 16
    },
    appointmentStatus: {
        backgroundColor: '#6BBE9C',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    appointmentStatusLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default AppointmentList;