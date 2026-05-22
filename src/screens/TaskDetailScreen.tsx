import React, { useMemo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import { getThemeColors, useTheme } from '../hooks/useTheme';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { deleteTask, toggleTask } from '../store/todos.store';
import { useTodoDetail } from '../hooks/useTodos';

interface TaskDetailScreenProps {
  route: any;
  navigation: any;
}

const TaskDetailScreen: React.FC<TaskDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { taskId } = route.params;
  const { isDarkMode } = useTheme();
  const colors = getThemeColors(isDarkMode);
  const dispatch = useAppDispatch();

  const { data: apiTask, isLoading } = useTodoDetail(taskId);
  const localTasks = useAppSelector(state => state.tasks.localTasks);

  // Local tasks take priority over API tasks
  const task = useMemo(() => {
    return localTasks.find(t => t.id === taskId) ?? apiTask;
  }, [taskId, localTasks, apiTask]);

  /**
   * Toggle task completion status
   * Operates on local Redux store only
   */
  const handleToggleTask = () => {
    dispatch(toggleTask(taskId));
  };

  /**
   * Delete task with confirmation
   * Removes from local Redux store
   */
  const handleDeleteTask = () => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', onPress: () => {} },
      {
        text: 'Delete',
        onPress: () => {
          dispatch(deleteTask(taskId));
          Alert.alert('Success', 'Task deleted successfully', [
            { text: 'OK', onPress: () => navigation.goBack() },
          ]);
        },
        style: 'destructive',
      },
    ]);
  };

  if (isLoading && !task) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!task) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Task not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: colors.primary, fontSize: 16 }}>← Back</Text>
        </TouchableOpacity>
      </View>

      {/* Task Content */}
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            Title
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>
            {task.title}
          </Text>
        </View>

        <View style={[styles.section, { marginTop: 20 }]}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            Status
          </Text>
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor: task.completed
                  ? colors.success
                  : colors.warning,
              },
            ]}
          >
            <Text style={styles.statusText}>
              {task.completed ? 'Completed' : 'Pending'}
            </Text>
          </View>
        </View>

        <View style={[styles.section, { marginTop: 20 }]}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            Task ID
          </Text>
          <Text style={[styles.idText, { color: colors.text }]}>{task.id}</Text>
        </View>

        <View style={[styles.section, { marginTop: 20 }]}>
          <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
            User ID
          </Text>
          <Text style={[styles.idText, { color: colors.text }]}>
            {task.userId}
          </Text>
        </View>

        <View style={[styles.actions, { marginTop: 32 }]}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: task.completed
                  ? colors.warning
                  : colors.success,
              },
            ]}
            onPress={handleToggleTask}
          >
            <Text style={styles.buttonText}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.error, marginTop: 12 },
            ]}
            onPress={handleDeleteTask}
          >
            <Text style={styles.buttonText}>Delete Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingBottom: 24 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  content: { paddingHorizontal: 16, paddingTop: 24 },
  section: { marginBottom: 16 },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  title: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  statusText: { color: '#FFFFFF', fontSize: 12, fontWeight: '600' },
  idText: { fontSize: 14, fontWeight: '500' },
  actions: { marginBottom: 24 },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});

export default TaskDetailScreen;
