export type Job = {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  type: string;
};

export type RootStackParamList = {
  JobFinder: undefined;
  SavedJobs: { savedJobs: Job[] };
  ApplicationForm: { job: Job };
};

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export type JobCardProps = {
  job: Job;
  onSave: () => void;
  onApply: () => void;
};