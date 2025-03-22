import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import JobCard from '../components/JobCard';
import { useTheme } from '../context/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Job, RootStackParamList } from '../types/types';

// Define the props for SavedJobsScreen
type SavedJobsScreenProps = NativeStackScreenProps<RootStackParamList, 'SavedJobs'>;

const SavedJobsScreen = ({ navigation, route }: SavedJobsScreenProps) => {
  const { theme } = useTheme();
  const styles = globalStyles(theme);
  const [savedJobs, setSavedJobs] = useState<Job[]>(route.params?.savedJobs || []);

  // Remove a job from the saved jobs list
  const removeJob = (id: string) => {
    setSavedJobs(savedJobs.filter(job => job.id !== id));
  };

  return (
    <View style={[styles.container, screenStyles.container]}>
      <FlatList
        data={savedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard
            job={item}
            onSave={() => removeJob(item.id)}
            onApply={() => navigation.navigate('ApplicationForm', { job: item })}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Job Finder</Text>
      </TouchableOpacity>
    </View>
  );
};

// Screen-specific styles
const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5', // Light background for Saved Jobs Screen
  },
});

export default SavedJobsScreen;