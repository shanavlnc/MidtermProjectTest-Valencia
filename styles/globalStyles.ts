import { StyleSheet } from 'react-native';
import { Theme } from '../types/types';

export const globalStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme === 'light' ? '#ffffff' : '#121212',
  },
  searchBar: {
    height: 40,
    borderColor: theme === 'light' ? '#cccccc' : '#333333',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    color: theme === 'light' ? '#000000' : '#ffffff',
  },
  jobCard: {
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#1e1e1e',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme === 'light' ? '#000000' : '#ffffff',
  },
  jobSubtitle: {
    fontSize: 16,
    color: theme === 'light' ? '#666666' : '#bdc3c7',
  },
  jobDetail: {
    fontSize: 14,
    color: theme === 'light' ? '#666666' : '#bdc3c7',
  },
  button: {
    backgroundColor: theme === 'light' ? '#007bff' : '#1e90ff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: theme === 'light' ? '#cccccc' : '#333333',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    color: theme === 'light' ? '#000000' : '#ffffff',
  },
});