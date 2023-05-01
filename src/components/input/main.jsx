import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Input = ({
  style,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCompleteType = 'off'
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword && secureTextEntry}
        keyboardType={keyboardType}
        autoCompleteType={autoCompleteType}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={toggleShowPassword} style={styles.toggleButton}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color="#aaa" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 16
  },
  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 5,
    fontSize: 16
  },
  toggleButton: {
    paddingHorizontal: 16,
    paddingVertical: 8
  }
});

export default Input;