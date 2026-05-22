// src/screens/TaskListScreen.tsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getThemeColors, useTheme } from '../hooks/useTheme';
import TaskList from './TaskList';

const Tab = createMaterialTopTabNavigator();

interface TaskListScreenProps {
  navigation: any;
}

const TaskListScreen: React.FC<TaskListScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const colors = getThemeColors(isDarkMode);

  const handleCreateTask = () => navigation.navigate('CreateTask');

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarIndicatorStyle: { backgroundColor: colors.primary },
          tabBarStyle: { backgroundColor: colors.surface },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '500',
            textTransform: 'capitalize',
          },
          tabBarPressColor: colors.border,
        }}
      >
        <Tab.Screen name="All">
          {() => <TaskList filter="all" navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Pending">
          {() => <TaskList filter="pending" navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Completed">
          {() => <TaskList filter="completed" navigation={navigation} />}
        </Tab.Screen>
      </Tab.Navigator>

      {/* FAB sits outside the navigator, floats over all tabs */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={handleCreateTask}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: { fontSize: 32, color: '#FFFFFF', fontWeight: 'bold' },
});

export default TaskListScreen;