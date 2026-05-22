import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskListScreen';
;
import {  getThemeColors } from '../hooks/useTheme';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  TaskList: undefined;
  TaskDetail: { taskId: number };
  CreateTask: undefined;
};

interface NavigationProps {
  isDarkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode }) => {
  const colors = getThemeColors(isDarkMode);

  const theme = isDarkMode
    ? {
        ...NavigationDarkTheme,
        colors: {
          ...NavigationDarkTheme.colors,
          primary: colors.primary,
          background: colors.background,
          card: colors.surface,
          text: colors.text,
          border: colors.border,
        },
      }
    : {
        ...NavigationDefaultTheme,
        colors: {
          ...NavigationDefaultTheme.colors,
          primary: colors.primary,
          background: colors.background,
          card: colors.surface,
          text: colors.text,
          border: colors.border,
        },
      };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
       <Stack.Screen name="TaskList" component={TaskListScreen}       options={{ headerShown: false }}/>
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: 'Task Detail' }}/>
        <Stack.Screen name="CreateTask" component={CreateTaskScreen}     options={{ title: 'New Task' }}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
