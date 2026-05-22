import { useColorScheme } from 'react-native';
import { useAppSelector } from './useRedux';

export const useTheme = () => {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const systemColorScheme = useColorScheme();

  const isDarkMode = themeMode === 'auto' 
    ? systemColorScheme === 'dark' 
    : themeMode === 'dark';

  return {
    isDarkMode,
    mode: themeMode,
  };
};

export const getThemeColors = (isDarkMode: boolean) => {
  return {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    surface: isDarkMode ? '#1E1E1E' : '#F5F5F5',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    textSecondary: isDarkMode ? '#B0B0B0' : '#666666',
    border: isDarkMode ? '#2C2C2C' : '#E0E0E0',
    primary: '#6200EE',
    success: '#4CAF50',
    error: '#FF5252',
    warning: '#FF9800',
  };
};
