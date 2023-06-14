import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const AppointmentScreen = () => {
  const appointmentsData = [
    {
      id: '1',
      doctor: {
        name: 'Dr. Juan Pérez',
        photo: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/imageLogo.png?alt=media&token=074b4e9d-93dd-4363-9c8b-54c380c1b41a',
      },
      date: '2023-06-15',
      time: '10:00 AM',
      status: 'pending',
    },
    {
      id: '2',
      doctor: {
        name: 'Dr. María Gómez',
        photo: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/imageLogo.png?alt=media&token=074b4e9d-93dd-4363-9c8b-54c380c1b41a',
      },
      date: '2023-06-16',
      time: '02:30 PM',
      status: 'pending',
    },
    // Agrega más citas según sea necesario
  ];

  const renderAppointmentItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Image source={{ uri: item.doctor.photo }} style={styles.doctorPhoto} />
          <View style={styles.headerText}>
            <Text style={styles.doctorName}>{item.doctor.name}</Text>
            <Text style={styles.status}>Pendiente</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {appointmentsData.length > 0 ? (
        <FlatList
          data={appointmentsData}
          renderItem={renderAppointmentItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay citas pendientes</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 5,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical:10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  doctorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default AppointmentScreen;
