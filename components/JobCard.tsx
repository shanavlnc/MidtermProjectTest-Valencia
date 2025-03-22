import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import { JobCardProps } from '../types/types';

const JobCard = ({ job, onSave, onApply }: JobCardProps) => {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{job.jobTitle}</Text>
      <Text style={styles.jobSubtitle}>{job.companyName}</Text>
      <Text style={styles.jobDetail}>💰 {job.salaryRange}</Text>
      <Text style={styles.jobDetail}>📍 {job.jobLocation}</Text>
      <Text style={styles.jobDetail}>📝 {job.employmentType}</Text>
      <View style={componentStyles.buttonContainer}>
        <TouchableOpacity style={[styles.button, componentStyles.saveButton]} onPress={onSave}>
          <Text style={styles.buttonText}>Save Job</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, componentStyles.applyButton]} onPress={onApply}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define component-specific styles
const componentStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  saveButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#2ecc71', // Green for save button
  },
  applyButton: {
    flex: 1,
    marginLeft: 8,
  },
});

export default JobCard;