import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { getThemeColors, useTheme } from '../hooks/useTheme';

interface EmptyStateProps {
  message: string;
  onCreateTask?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, onCreateTask }) => {
  const { isDarkMode } = useTheme();
  const colors = getThemeColors(isDarkMode);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Icon */}
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: colors.surface },
        ]}
      >
        <Text style={styles.icon}>📝</Text>
      </View>

      {/* Message */}
      <Text style={[styles.message, { color: colors.text }]}>
        {message}
      </Text>

      <Text
        style={[styles.description, { color: colors.textSecondary }]}
      >
        Get started by creating a new task
      </Text>

      {/* Action Button */}
      {onCreateTask && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={onCreateTask}
        >
          <Text style={styles.buttonText}>Create First Task</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default EmptyState;
