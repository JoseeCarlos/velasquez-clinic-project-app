import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function Notification({navigation}) {
  function handleSubmit() {
    // handle submit logic here
  }

  const notifications = [
    {
      id: 1,
      icon: 'notifications',
      content: 'New notification received ',
      date: new Date(), // Current date and time
    },
    {
      id: 2,
      icon: 'mail',
      content: 'You have a new email',
      date: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ), // Example past date
    },
  ];

  function formatDate(date) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (isSameDate(date, today)) {
    return 'Hoy';
  } else if (isSameDate(date, yesterday)) {
    return 'Ayer';
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } 
}

function isSameDate(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <TouchableOpacity onPress={handleSubmit}>
          
        </TouchableOpacity>
      </View>
      {notifications.map((notification) => (
        <View key={notification.id} style={styles.notificationContainer}>
          <Ionicons name={notification.icon} size={32} color="#4267B2" />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationText}>{notification.content}</Text>
            <Text style={styles.notificationDate}>{formatDate(notification.date)}</Text>
          </View>
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    position: "relative",
    top: 0,
    backgroundColor: "#F9A13C",
    height: 85,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: -120,
  },
  headerButton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 80,
    
  },
  notificationContent: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 14,
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 14,
    color: '#888',
  },
  
});

export default Notification;
