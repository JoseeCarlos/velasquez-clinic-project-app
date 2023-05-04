import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Modal } from 'react-native';
import Header from '../header/main';
import DateTimePicker from '@react-native-community/datetimepicker';
import ScheduleList from './appointmentList/Main';
const AddAppointment = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };

      const showDatepicker = () => {
        setShow(true);
        setMode('date');
        console.log('nasdjsd');
      };
    
    const [showModal, setShowModal] = useState(false);
    const schedule = [
        { time: '9:00 AM', isAvailable: true },
        { time: '10:00 AM', isAvailable: false },
        { time: '11:00 AM', isAvailable: true },
        { time: '12:00 PM', isAvailable: true },
        { time: '1:00 PM', isAvailable: false },
        { time: '2:00 PM', isAvailable: true },
        { time: '3:00 PM', isAvailable: true },
        { time: '4:00 PM', isAvailable: true },
      ];

  return (
    
        <View style={styles.container}>
            <Header title="Nueva cita" />
            <View style={styles.content}>
         <View style={styles.form}>
            <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nombre de la cita"
            placeholderTextColor="#777"
          /></View>
            <Button style={{
                height: 40,
                backgroundColor: '#F5F5F5',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 20
                
            }} onPress={showDatepicker} title="Show date picker!" />
            <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
                <Text style={styles.buttonText}>Ver horarios disponibles</Text>
            </TouchableOpacity>
            <Modal visible={showModal} animationType="slide">
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setShowModal(false)}>
                        <Text style={styles.closeButtonText}>Atras</Text>
                    </TouchableOpacity>
                    <ScheduleList schedule={schedule} />
                </View>
            </Modal>
               {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
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
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  form: {
    marginTop: 30
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  dateInput: {
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'center'
  },
  dateText: {
    fontSize: 16,
    color: '#333'
  },
  addButton: {
    backgroundColor: '#6BBE9C',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#61282D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
    },
    closeButton: {
        backgroundColor: '#F44336',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
      },

});

export default AddAppointment;