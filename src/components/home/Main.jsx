import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../header/main';
import Menu from '../menu/Main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Card from '../homeCard/HomeCard';
import PendingAppointments from '../quotes/Main';
import AddAppointment from '../addAppointment/Main';
import AppointmentHistoryPage from '../appointmentHistory/Main'
import Icon from 'react-native-vector-icons/MaterialIcons';
;

function HomeScreen({ navigation }) {
  const username = 'Juan';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <Header leftIcon="menu-outline" leftAction={toggleMenu} rightIcon="notifications-outline" navigation={navigation} notificationCount={'3'} />
      <View style={styles.content}>
        <Text style={styles.text}>Bienvenido!</Text>
        <Card iconName="event">
          <Text>Reserver una cita!</Text>
        </Card>
        <Card iconName="history">
          <Text>Historial de citas!</Text>
        </Card>

        <Card iconName="credit-card" onPress={()=>{
          navigation.navigate('PaymentHistory')
        }} >
          <Text>Pagos o Cuotas</Text>
        </Card>
        <Card iconName="local-hospital" onPress={()=>{
          navigation.navigate('Treatments')
        }} >
          <Text>Tratamientos</Text>
        </Card>
        <Card iconName="medical-services" onPress={()=>{
          navigation.navigate('News')
        }} >
          <Text>Clinica</Text>
        </Card>
      </View>
      <Menu isOpen={isMenuOpen} navigation={navigation} toggleMenu={toggleMenu} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Configuración" />
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

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Citas') {
            
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Configuración') {
            iconName = focused ? 'settings' : 'settings-outline';
          }else if (route.name === 'Nueva Cita'){
                       
            iconName = focused ? 'add-circle' : 'add-circle-outline';              
          }else if (route.name === 'Historial'){
           
            iconName = focused ? 'time' : 'time-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F9A13C',
        inactiveTintColor: '#61282D',
        style: {
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#DDD',
          height: 60,
        },
        labelStyle: {
          fontSize: 12,
          
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Citas" component={PendingAppointments} options={{ headerShown: false }}/>
      <Tab.Screen name="Nueva Cita" component={AddAppointment} options={{ headerShown: false }}/>
      <Tab.Screen name="Configuración" component={SettingsScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Historial" component={AppointmentHistoryPage} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#F9A13C',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MainScreen;