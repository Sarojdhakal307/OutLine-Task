import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Task } from '../types/todo.types';
import { getThemeColors } from '../hooks/useTheme';
import { useAppDispatch } from '../store/hooks';
import { toggleTask } from '../store/slices/todosSlice';

interface TaskCardProps {
  task: Task;
  onPress: () => void;
  isDarkMode: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onPress, isDarkMode }) => {
  const colors = getThemeColors(isDarkMode);
  const dispatch = useAppDispatch();

  /**
   * Toggle task without navigation
   * Quick action from task list
   */
  const handleQuickToggle = (e: any) => {
    e.stopPropagation();
    dispatch(toggleTask(task.id));
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Status Indicator */}
      <View
        style={[
          styles.statusIndicator,
          {
            backgroundColor: task.completed ? colors.success : colors.warning,
          },
        ]}
      />

      {/* Content */}
      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
              textDecorationLine: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1,
            },
          ]}
          numberOfLines={2}
        >
          {task.title}
        </Text>
        <Text
          style={[
            styles.status,
            {
              color: task.completed ? colors.success : colors.warning,
            },
          ]}
        >
          {task.completed ? '✓ Completed' : '◐ Pending'}
        </Text>
      </View>

      {/* Quick Toggle Button */}
      <TouchableOpacity
        style={[
          styles.toggleButton,
          { 
            backgroundColor: task.completed ? colors.warning : colors.success,
          },
        ]}
        onPress={handleQuickToggle}
      >
        <Text style={styles.toggleText}>
          {task.completed ? '↺' : '✓'}
        </Text>
      </TouchableOpacity>

      {/* Chevron */}
      <Text style={[styles.chevron, { color: colors.textSecondary }]}>
        →
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 6,
    marginHorizontal: 0,
    borderRadius: 8,
    borderWidth: 1,
  },
  statusIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: '400',
  },
  toggleButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  chevron: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default TaskCard;
