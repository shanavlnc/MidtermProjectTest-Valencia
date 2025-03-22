import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

// Define the props for ApplicationForm
type ApplicationFormProps = NativeStackScreenProps<RootStackParamList, 'ApplicationForm'>;

const ApplicationForm = ({ navigation, route }: ApplicationFormProps) => {
  const { theme } = useTheme();
  const styles = globalStyles(theme);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !contact || !reason) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', 'Application submitted!', [
      { text: 'OK', onPress: () => navigation.navigate('JobFinder') },
    ]);
  };

  return (
    <View style={[styles.container, screenStyles.container]}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={theme === 'light' ? '#666666' : '#bdc3c7'}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={theme === 'light' ? '#666666' : '#bdc3c7'}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
        placeholderTextColor={theme === 'light' ? '#666666' : '#bdc3c7'}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Why should we hire you?"
        value={reason}
        onChangeText={setReason}
        multiline
        placeholderTextColor={theme === 'light' ? '#666666' : '#bdc3c7'}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Application</Text>
      </TouchableOpacity>
    </View>
  );
};

// Screen-specific styles
const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa', // Light background for Application Form
  },
});

export default ApplicationForm;