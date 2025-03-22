import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import JobCard from '../components/JobCard';
import { useTheme } from '../context/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Job, RootStackParamList } from '../types/types';

// Define the props for JobFinderScreen
type JobFinderScreenProps = NativeStackScreenProps<RootStackParamList, 'JobFinder'>;

const JobFinderScreen = ({ navigation }: JobFinderScreenProps) => {
  const { theme, toggleTheme } = useTheme();
  const styles = globalStyles(theme);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://empllo.com/api/v1');
      const jobsWithIds = response.data.map((job: Job) => ({ ...job, id: uuidv4() }));
      setJobs(jobsWithIds);
      setError('');
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to fetch jobs. Please try again later.');
    }
  };

  const saveJob = (job: Job) => {
    if (!savedJobs.some(savedJob => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for job title..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={theme === 'light' ? '#666666' : '#bdc3c7'}
      />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <JobCard
              job={item}
              onSave={() => saveJob(item)}
              onApply={() => navigation.navigate('ApplicationForm', { job: item })}
            />
          )}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SavedJobs', { savedJobs })}
      >
        <Text style={styles.buttonText}>View Saved Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobFinderScreen;