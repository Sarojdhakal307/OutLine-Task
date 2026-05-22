/**
 * Task Management App
 * React Native CLI + TypeScript + Redux Toolkit + React Query
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './src/navigation/Navigation';
import { useTheme } from './src/hooks/useTheme';
import { store } from './src/store/store';


const queryClient = new QueryClient();

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#FFFFFF'}
      />
      <Navigation isDarkMode={isDarkMode} />
    </SafeAreaView>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppContent />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;