// src/components/TaskList.tsx

import React, { useMemo } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { getThemeColors, useTheme } from '../hooks/useTheme';
import { useAppSelector } from '../hooks/useRedux';

import { FilterType } from '../store/filter.store';
import ErrorState from '../components/ErrorState';
import EmptyState from '../components/EmptyState';
import TaskCard from '../components/TaskCard';
import { useTodos } from '../hooks/useTodos';

interface TaskListProps {
    filter: FilterType;
    navigation: any;
}

const TaskList: React.FC<TaskListProps> = ({ filter, navigation }) => {
    const { isDarkMode } = useTheme();
    const colors = getThemeColors(isDarkMode);

    const { data: apiTasks = [], isLoading, error, refetch } = useTodos();
    const localTasks = useAppSelector((state) => state.tasks.localTasks);
    const handleCreateTask = () => navigation.navigate('CreateTask');

    const tasks = useMemo(() => {
        const combined = [...apiTasks, ...localTasks];
        if (filter === 'completed') return combined.filter((t) => t.completed);
        if (filter === 'pending') return combined.filter((t) => !t.completed);
        return combined;
    }, [apiTasks, localTasks, filter]);

    const handleTaskPress = (taskId: number) =>
        navigation.navigate('TaskDetail', { taskId });


    if (isLoading && apiTasks.length === 0) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (error && apiTasks.length === 0) {
        return (
            <View style={[styles.centered, { backgroundColor: colors.background }]}>
                <ErrorState message="Failed to load tasks" onRetry={refetch} />
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {tasks.length === 0 ? (
                <View style={styles.centered}>
                    <EmptyState
                        message={`No ${filter === 'all' ? 'tasks' : filter + ' tasks'} found`}
                        onCreateTask={handleCreateTask}
                    />
                </View>
            ) : (
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TaskCard
                            task={item}
                            onPress={() => handleTaskPress(item.id)}
                            isDarkMode={isDarkMode}
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            )}


        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    listContent: { paddingVertical: 8, paddingHorizontal: 12 },
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

export default TaskList;