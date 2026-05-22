# OutlineTask Documentation

Welcome to the OutlineTask project documentation. This folder contains comprehensive guides for setting up, understanding, and contributing to the project.

## 📚 Documentation Files

### [SETUP.md](./SETUP.md)
Complete setup instructions for getting the project running on your machine.

**Includes:**
- Prerequisites and system requirements
- Step-by-step installation guide
- Platform-specific setup (Android & iOS)
- Development workflow
- Available npm scripts
- Troubleshooting common issues
- Environment configuration
- Testing and linting
- Debugging tools

👉 **Start here if you're setting up the project for the first time.**

---

### [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)
Detailed documentation of the project's directory structure and organization.

**Includes:**
- Complete folder hierarchy
- Detailed description of each directory
- Purpose of key files
- Data flow architecture
- File naming conventions
- Import path aliases
- Best practices for adding new features

👉 **Refer to this when navigating the codebase.**

---

## 🚀 Quick Start

For new developers, follow these steps:

1. **Read [SETUP.md](./SETUP.md)** - Get your environment set up
2. **Read [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)** - Understand the project layout
3. **Start the dev server**: `npm start`
4. **Run on Android/iOS**: `npm run android` or `npm run ios`

---

## 📱 Project Overview

**OutlineTask** is a React Native task management application built with:

- **Frontend**: React Native with TypeScript
- **State Management**: Redux Toolkit
- **API Communication**: Axios + React Query
- **Navigation**: React Navigation
- **Platforms**: iOS and Android

---

## 🔧 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| React Native | Mobile framework | 0.85.3 |
| TypeScript | Type-safe JavaScript | 5.8.3 |
| Redux Toolkit | State management | 2.12.0 |
| React Query | Server state management | 5.100.11 |
| React Navigation | Navigation framework | Latest |
| Axios | HTTP client | 1.16.1 |
| Jest | Testing framework | 29.6.3 |

---

## 📋 Available Commands

```bash
npm start              # Start Metro dev server
npm run android        # Build and run on Android
npm run ios            # Build and run on iOS
npm test               # Run Jest tests
npm run lint           # Check code quality
```

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────┐
│         User Interface (Screens)        │
│   TaskList | TaskDetail | CreateTask    │
└──────────────┬──────────────────────────┘
               │ uses
        ┌──────▼────────┐
        │ Redux Store   │ (Global State)
        └──────┬────────┘
               │
    ┌──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
  Todos    Filters     Theme
 Reducer   Reducer    Reducer
    │          │          │
    └──────────┼──────────┘
               │ connected to
        ┌──────▼──────────┐
        │ Custom Hooks    │
        └──────┬──────────┘
               │ calls
        ┌──────▼──────────┐
        │  API Layer      │ (React Query)
        │  (useTodo)      │
        └──────┬──────────┘
               │
        ┌──────▼──────────┐
        │  Backend API    │
        └─────────────────┘
```

---

## 📁 Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/screens/` | Full-screen components (pages) |
| `src/components/` | Reusable UI components |
| `src/store/` | Redux state management |
| `src/apis/` | API integration layer |
| `src/hooks/` | Custom React hooks |
| `src/navigation/` | App navigation setup |
| `src/config/` | Environment configuration |
| `src/types/` | TypeScript type definitions |
| `android/` | Android native code |
| `ios/` | iOS native code |

---

## 🔗 Navigation Structure

The app uses React Navigation with the following structure:

```
Navigation Stack
├── TaskListScreen (Main screen with list of tasks)
├── TaskDetailScreen (View task details)
└── CreateTaskScreen (Create new task form)
```

---

## 🗄️ State Management

### Redux Store Structure
```typescript
{
  todos: {
    items: Todo[],
    loading: boolean,
    error: string | null
  },
  filters: {
    status: 'all' | 'active' | 'completed',
    searchTerm: string
  },
  theme: {
    mode: 'light' | 'dark'
  }
}
```

---

## 🌐 API Integration

- **Base URL**: Configured in `src/config/env.ts`
- **HTTP Client**: Axios instance in `src/apis/apiServices/client.ts`
- **Hooks**: React Query hooks in `src/apis/apiHooks/`

### Example API Hook Usage
```typescript
import { useTodo } from '@/apis/apiHooks/useTodo';

const { todos, isLoading, error } = useTodo();
```

---

## ✅ Testing

Run the test suite with:
```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # With coverage report
```

Tests are located in `__tests__/` directory.

---

## 🐛 Debugging

### Methods
1. **React Native Debugger** - Recommended for visual debugging
2. **Chrome DevTools** - For JavaScript debugging
3. **Console logs** - Quick debugging with `console.log()`

Press `Cmd+D` (iOS) or `Cmd+M` (Android) to open debug menu.

---

## 🚨 Common Issues & Solutions

See [SETUP.md - Troubleshooting](./SETUP.md#troubleshooting) for solutions to common problems.

---

## 💡 Best Practices

### Code Organization
- Keep components focused and single-responsibility
- Use custom hooks for shared logic
- Organize imports alphabetically
- Use TypeScript for type safety

### State Management
- Use Redux for global state
- Use React state for component-level state
- Use React Query for server state
- Avoid prop drilling with Redux

### Performance
- Use React.memo for expensive components
- Implement lazy loading for screens
- Optimize list rendering with FlatList
- Use production builds for testing performance

---

## 📖 Additional Resources

- [React Native Docs](https://reactnative.dev)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [React Query Docs](https://tanstack.com/query/)
- [React Navigation Docs](https://reactnavigation.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👥 Contributing

1. Follow the file naming conventions documented in [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)
2. Run `npm run lint` before committing
3. Add tests for new features
4. Update documentation if adding new functionality
5. Use conventional commit messages

---

## 📝 Documentation Index

```
docs/
├── README.md                  ← You are here
├── SETUP.md                   ← Setup & installation
└── FOLDER_STRUCTURE.md        ← Project structure & architecture
```

---

## ❓ Need Help?

1. Check the [SETUP.md](./SETUP.md) troubleshooting section
2. Review [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) to understand the codebase
3. Check the official documentation links above
4. Open an issue on GitHub

---

**Last Updated**: May 2026

**Project Version**: 0.0.1
