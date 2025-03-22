export type RootStackParamList = {
  JobFinder: undefined;
  SavedJobs: { savedJobs: Job[] };
  ApplicationForm: { job: Job };
};

export type Job = {
  id: string; // We'll add this manually
  jobTitle: string;
  companyName: string;
  salaryRange: string;
  jobLocation: string;
  employmentType: string;
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