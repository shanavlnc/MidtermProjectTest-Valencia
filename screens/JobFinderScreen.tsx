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

  // Fetch jobs from the JSON file
  const fetchJobs = async () => {
    try {
      const response = await axios.get('./data/response.json'); // Path to the JSON file
      console.log('API Response:', response.data); // Log the response
      const jobsWithIds = response.data.map((job: Job) => ({ ...job, id: uuidv4() }));
      setJobs(jobsWithIds);
      setError('');
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to fetch jobs. Please try again later.');
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Save a job to the saved jobs list
  const saveJob = (job: Job) => {
    if (!savedJobs.some(savedJob => savedJob.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // Filter jobs based on the search query
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Toggle dark/light mode button */}
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={styles.buttonText}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Text>
      </TouchableOpacity>

      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for job title..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor={theme === 'light' ? '#666666' : '#bdc3c7'}
      />

      {/* Display error message or job list */}
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

      {/* Button to view saved jobs */}
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