import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import { getThemeColors, useTheme } from '../hooks/useTheme';
import { useAppDispatch } from '../hooks/useRedux';
import { Task } from '../types/todo.types';
import { addTask } from '../store/todos.store';

interface CreateTaskScreenProps {
  navigation: any;
}

const CreateTaskScreen: React.FC<CreateTaskScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const colors = getThemeColors(isDarkMode);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  /**
   * Create a new task and add it to local Redux store
   * Task is stored locally only
   */
  const handleCreateTask = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }

    setIsCreating(true);

    try {
      // Generate a unique ID for local task (using timestamp + random)
      const newTaskId = Math.floor(Date.now() + Math.random() * 1000);

      const newTask: Task = {
        id: newTaskId,
        title: title.trim(),
        completed: isCompleted,
        userId: 0, // Local tasks have userId 0
      };

      dispatch(addTask(newTask));

      Alert.alert('Success', 'Task created successfully', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (err) {
      Alert.alert('Error', 'Failed to create task');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.surface }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: colors.primary, fontSize: 16 }}>← Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>New Task</Text>
        <View style={{ width: 60 }} />
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Title Input */}
        <View style={styles.formGroup}>
          <Text style={[styles.label, { color: colors.text }]}>Task Title *</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                color: colors.text,
                borderColor: colors.border,
              },
            ]}
            placeholder="Enter task title"
            placeholderTextColor={colors.textSecondary}
            value={title}
            onChangeText={setTitle}
            editable={!isCreating}
            maxLength={100}
          />
          <Text style={[styles.charCount, { color: colors.textSecondary }]}>
            {title.length}/100
          </Text>
        </View>

        {/* Status Toggle */}
        <View style={[styles.formGroup, { marginTop: 20 }]}>
          <View style={styles.statusRow}>
            <Text style={[styles.label, { color: colors.text }]}>Mark as Completed</Text>
            <Switch
              value={isCompleted}
              onValueChange={setIsCompleted}
              disabled={isCreating}
              trackColor={{ false: colors.border, true: colors.success }}
              thumbColor={isCompleted ? colors.success : colors.textSecondary}
            />
          </View>
          <Text style={[styles.helperText, { color: colors.textSecondary }]}>
            {isCompleted
              ? 'This task will be marked as completed'
              : 'This task will be marked as pending'}
          </Text>
        </View>

        {/* Create Button */}
        <TouchableOpacity
          style={[
            styles.createButton,
            { backgroundColor: colors.primary, opacity: isCreating ? 0.6 : 1 },
          ]}
          onPress={handleCreateTask}
          disabled={isCreating}
        >
          <Text style={styles.createButtonText}>
            {isCreating ? 'Creating...' : 'Create Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingBottom: 24 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  form: { paddingHorizontal: 16, paddingVertical: 20 },
  formGroup: { marginBottom: 12 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    minHeight: 44,
  },
  charCount: { fontSize: 12, marginTop: 6, textAlign: 'right' },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  helperText: { fontSize: 12 },
  createButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  createButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});

export default CreateTaskScreen;