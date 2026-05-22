# Folder Structure Documentation

## Project Overview

```
outlinetasks/
├── src/                          # Main source code directory
├── android/                      # Android native code and build files
├── ios/                          # iOS native code and build files
├── __tests__/                    # Jest test files
├── docs/                         # Documentation
├── node_modules/                 # Dependencies (not versioned)
├── app.json                      # React Native app configuration
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── babel.config.js               # Babel transpiler configuration
├── jest.config.js                # Jest testing configuration
├── metro.config.js               # Metro bundler configuration
├── index.js                      # App entry point
├── App.tsx                       # Root component
├── Gemfile                        # Ruby dependencies (for CocoaPods)
└── README.md                      # Project introduction
```

---

## Detailed Directory Structure

### 📁 `src/` - Source Code

The main application source code organized by features and functionality:

```
src/
├── apis/                         # API integration layer
│   ├── apiHooks/
│   │   └── useTodo.ts           # React Query hook for todo operations
│   └── apiServices/
│       ├── client.ts             # Axios HTTP client configuration
│       └── todosApi.ts           # Todo API endpoints
├── components/                   # Reusable UI components
│   ├── EmptyState.tsx            # Empty state component
│   ├── ErrorState.tsx            # Error display component
│   └── TaskCard.tsx              # Task card component
├── config/                       # Configuration files
│   └── env.ts                    # Environment variables and constants
├── hooks/                        # Custom React hooks
│   ├── useRedux.ts               # Redux integration hook
│   └── useTheme.ts               # Theme switching hook
├── navigation/                   # Navigation setup
│   └── Navigation.tsx            # Main navigation component
├── screens/                      # Screen components (pages)
│   ├── CreateTaskScreen.tsx      # Create new task screen
│   ├── TaskDetailScreen.tsx      # Task details view screen
│   ├── TaskList.tsx              # List of tasks component
│   └── TaskListScreen.tsx        # Task list screen wrapper
├── store/                        # Redux state management
│   ├── store.ts                  # Redux store configuration
│   ├── todos.store.ts            # Todo items reducer and actions
│   ├── filter.store.ts           # Filter state reducer
│   └── theme.store.ts            # Theme preferences reducer
└── types/                        # TypeScript type definitions
    └── todo.types.ts             # Todo type interfaces
```

#### **`src/apis/`** - API Integration
- **Purpose**: Handles all server communication
- **`apiServices/client.ts`**: Configured Axios instance with base URL and interceptors
- **`apiServices/todosApi.ts`**: API methods for CRUD operations on todos
- **`apiHooks/useTodo.ts`**: React Query hooks that consume the API

#### **`src/components/`** - Reusable Components
- **Purpose**: Shared UI components used across multiple screens
- **`EmptyState.tsx`**: Displayed when no tasks exist
- **`ErrorState.tsx`**: Displayed when an error occurs
- **`TaskCard.tsx`**: Individual task display component

#### **`src/config/`** - Configuration
- **Purpose**: Centralized configuration management
- **`env.ts`**: Environment variables, API base URL, feature flags

#### **`src/hooks/`** - Custom Hooks
- **Purpose**: Reusable stateful logic
- **`useRedux.ts`**: Wrapper hook for Redux access
- **`useTheme.ts`**: Theme state and toggle functionality

#### **`src/navigation/`** - Navigation
- **Purpose**: App navigation structure and routing
- **`Navigation.tsx`**: Configured React Navigation with all screen routes

#### **`src/screens/`** - Screen Components
- **Purpose**: Full-screen components representing different app views
- **`TaskListScreen.tsx`**: Main list of all tasks
- **`TaskDetailScreen.tsx`**: Detailed view of a single task
- **`CreateTaskScreen.tsx`**: Form for creating new tasks
- **`TaskList.tsx`**: Supporting list component

#### **`src/store/`** - State Management (Redux)
- **Purpose**: Global application state using Redux Toolkit
- **`store.ts`**: Store setup and configuration
- **`todos.store.ts`**: Actions and reducers for todo items
- **`filter.store.ts`**: Actions and reducers for task filtering
- **`theme.store.ts`**: Actions and reducers for theme settings

#### **`src/types/`** - Type Definitions
- **Purpose**: Shared TypeScript interfaces and types
- **`todo.types.ts`**: Todo entity interfaces and enums

---

### 📁 `android/` - Android Native Code

```
android/
├── app/                          # Main Android app module
│   ├── src/                      # Android source code
│   │   └── main/                 # Main Android app code
│   ├── build.gradle              # App-level Gradle configuration
│   └── proguard-rules.pro        # ProGuard rules for release builds
├── gradle/
│   └── wrapper/                  # Gradle wrapper files
├── build.gradle                  # Project-level Gradle configuration
├── gradle.properties             # Gradle properties
├── settings.gradle               # Gradle settings
├── gradlew                        # Gradle wrapper (Unix)
└── gradlew.bat                   # Gradle wrapper (Windows)
```

**Key Files**:
- **`app/build.gradle`**: Defines Android app configuration, dependencies, build types, and signing
- **`build.gradle`**: Project-wide Gradle settings
- **`local.properties`**: Local Android SDK path (created during setup, not versioned)

---

### 📁 `ios/` - iOS Native Code

```
ios/
├── outlinetask/                  # Main iOS app bundle
│   ├── AppDelegate.swift         # App entry point
│   ├── Info.plist                # App configuration
│   ├── LaunchScreen.storyboard   # Launch screen UI
│   ├── PrivacyInfo.xcprivacy     # Privacy manifest
│   └── Images.xcassets/          # App assets and icon
├── outlinetask.xcodeproj/        # Xcode project file
│   ├── project.pbxproj           # Project configuration
│   └── xcshareddata/             # Shared scheme data
├── outlinetask.xcworkspace/      # Xcode workspace file
├── Podfile                        # CocoaPods dependencies
└── Pods/                          # Installed CocoaPods (created after pod install)
```

**Key Files**:
- **`AppDelegate.swift`**: iOS app lifecycle management
- **`Podfile`**: iOS native dependencies managed by CocoaPods
- **`Info.plist`**: App configuration (permissions, capabilities, etc.)
- **`PrivacyInfo.xcprivacy`**: Privacy manifest for App Store

---

**Purpose**: Jest test files for unit and integration testing

---

### 📁 Root Configuration Files

| File | Purpose |
|------|---------|
| `app.json` | React Native app metadata and configuration |
| `package.json` | Node.js dependencies and npm scripts |
| `tsconfig.json` | TypeScript compiler configuration |
| `babel.config.js` | Babel transpiler configuration for JSX and modern JS |
| `jest.config.js` | Jest test framework configuration |
| `metro.config.js` | React Native Metro bundler configuration |
| `index.js` | App entry point - registers root component |
| `App.tsx` | Root component and initial navigation setup |
| `Gemfile` | Ruby dependencies (CocoaPods for iOS) |
| `README.md` | Project introduction and quick start |

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Screens (UI)                          │
│  TaskListScreen | TaskDetailScreen | CreateTaskScreen   │
└────────────────┬────────────────────────────────────────┘
                 │ uses
         ┌───────▼────────┐
         │  Redux Store   │  State Management
         │  (store.ts)    │
         └────────┬───────┘
                  │ reads/writes
    ┌─────────────┼─────────────┐
    │             │             │
    ▼             ▼             ▼
todos.store   filter.store   theme.store
 (reducers)    (reducers)     (reducers)
    │             │             │
    │             │             │
    └─────────────┼─────────────┘
                  │ uses
         ┌────────▼──────────┐
         │   Custom Hooks    │
         │  useRedux         │
         │  useTheme         │
         └────────┬──────────┘
                  │ calls
         ┌────────▼──────────┐
         │  API Hooks        │
         │  (useTodo)        │  Server State
         │  (React Query)    │
         └────────┬──────────┘
                  │ calls
         ┌────────▼──────────┐
         │  API Services     │
         │  (todosApi.ts)    │
         └────────┬──────────┘
                  │ uses
         ┌────────▼──────────┐
         │  HTTP Client      │
         │  (client.ts)      │
         │  (Axios)          │
         └────────┬──────────┘
                  │ communicates with
         ┌────────▼──────────┐
         │  Backend API      │
         └───────────────────┘
```

---

## File Naming Conventions

### TypeScript/React Files
- **Components**: `PascalCase.tsx` (e.g., `TaskCard.tsx`)
- **Hooks**: `camelCase.ts` starting with `use` (e.g., `useTodo.ts`)
- **Utilities**: `camelCase.ts` (e.g., `client.ts`)
- **Types**: `camelCase.types.ts` (e.g., `todo.types.ts`)
- **Store**: `camelCase.store.ts` (e.g., `todos.store.ts`)

### Native Files
- **iOS**: `PascalCase.swift` (e.g., `AppDelegate.swift`)
- **Android**: Java files follow Java conventions

---

## Import Path Aliases

TypeScript is configured to support path aliases for cleaner imports. Refer to `tsconfig.json` for alias mappings.

Example:
```typescript
// Instead of:
import { useRedux } from '../../../hooks/useRedux';

// Use (if alias configured):
import { useRedux } from '@/hooks/useRedux';
```

---

## Adding New Features

### Adding a New Screen

1. Create component in `src/screens/NewScreen.tsx`
2. Add route to `src/navigation/Navigation.tsx`
3. Create any specific components in `src/components/`
4. Use hooks from `src/hooks/`

### Adding a New API Endpoint

1. Add method to `src/apis/apiServices/todosApi.ts`
2. Create hook in `src/apis/apiHooks/`
3. Use in screens/components

### Adding New Redux State

1. Create new file `src/store/featureName.store.ts`
2. Define reducers and actions
3. Add to store configuration in `src/store/store.ts`

---

## Important Notes

- **`node_modules/`** should not be versioned in git
- **`Pods/`** should not be versioned in git
- **`android/local.properties`** is environment-specific and not versioned
- **`ios/Pods/`** is generated and not versioned
- Configuration is centralized in `src/config/env.ts`

---


