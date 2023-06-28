import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Header from "../header/main";
import Menu from "../menu/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Card from "../homeCard/HomeCard";
import PendingAppointments from "../quotes/Main";
import AddAppointment from "../addAppointment/Main";
import AppointmentHistoryPage from "../appointmentHistory/Main";
import Icon from "react-native-vector-icons/MaterialIcons";
import CardSlider from "../CardSlider";
import MenuHome from "../MenuHome";
import NewsComponent from "../NewsComponent";

function HomeScreen({ navigation }) {
  const username = "Juan";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const doctor = {
    photo: "https://source.unsplash.com/random/800x600/?person", // Ruta a la imagen de la foto del doctor
    name: "Dr. Juan Pérez",
    specialty: "Cardiología",
  };
  const appointment = {
    date: "22 de junio de 2023",
    time: "10:00 AM",
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon="menu-outline"
        leftAction={toggleMenu}
        rightIcon="notifications-outline"
        navigation={navigation}
        notificationCount={"3"}
      />

      <ScrollView>
      <View style={styles.card}>
        <Text style={styles.greeting}>Hola, Luis Gonzales!</Text>
        <Text style={styles.question}>¿Qué tienes planeado para hoy?</Text>
      </View>

      <View style={styles.cardInfo}>
        <View style={styles.doctorInfo}>
          <Image source={{ uri: doctor.photo }} style={styles.doctorPhoto} />
          <View>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.appointmentInfo}>
          <Text style={styles.appointmentTitle}>Tu próxima cita:</Text>
          <Text style={styles.appointmentDate}>{appointment.date}</Text>
          <Text style={styles.appointmentTime}>{appointment.time}</Text>
        </View>
      </View>

      <Text style={styles.text}>Insights </Text>

      <MenuHome navigation={navigation} />

      <Text style={styles.text}>Noticias</Text>
      <NewsComponent/>

      </ScrollView>

      

      <Menu
        isOpen={isMenuOpen}
        navigation={navigation}
        toggleMenu={toggleMenu}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Configuración"
        navigation={navigation}
        notificationCount={"3"}
      />
      <View style={styles.content}>
        <Text style={styles.text}>¡Pantalla de configuración!</Text>
      </View>
    </View>
  );
};

const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Inicio") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Citas") {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === "Pagos") {
        iconName = focused ? "card" : "card-outline";
      } else if (route.name === "Nueva Cita") {
        iconName = focused ? "add-circle" : "add-circle-outline";
      } else if (route.name === "Historial") {
        iconName = focused ? "time" : "time-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#F9A13C",
    tabBarInactiveTintColor: "#61282D",
    tabBarStyle: {
      backgroundColor: "#FFF",
      borderTopWidth: 1,
      borderTopColor: "#DDD",
      height: 60,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      marginBottom: 4,
    },
  })}
>
  {/* Tab Screens */}
  <Tab.Screen
    name="Inicio"
    component={HomeScreen}
    options={{ headerShown: false }}
  />
  <Tab.Screen
    name="Citas"
    component={PendingAppointments}
    options={{ headerShown: false }}
  />
  <Tab.Screen
    name="Nueva Cita"
    component={AddAppointment}
    options={{ headerShown: false }}
  />
  <Tab.Screen
    name="Pagos"
    component={SettingsScreen}
    options={{ headerShown: false }}
  />
  <Tab.Screen
    name="Historial"
    component={AppointmentHistoryPage}
    options={{ headerShown: false }}
  />
</Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F9A13C",
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",

    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  question: {
    fontSize: 14,
    color: "#a19c9c",
  },

  cardInfo: {
    backgroundColor: "#F9A13C",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  doctorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  doctorSpecialty: {
    fontSize: 16,
    color: "white",
  },
  line: {
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 16,
  },
  appointmentInfo: {
    marginLeft: 76,
    color: "white",
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  appointmentDate: {
    fontSize: 16,
    color: "white",
  },
  appointmentTime: {
    fontSize: 16,
    color: "#888",
    color: "white",
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
});

export default MainScreen;
