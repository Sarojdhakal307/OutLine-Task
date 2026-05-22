# Project Setup Guide

## Overview
This is a React Native project called **OutlineTask** - a task management application built with TypeScript, Redux, and React Navigation.

### Technology Stack
- **React Native** (v0.85.3) - Mobile framework
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management
- **React Query** - Server state management
- **React Navigation** - Navigation framework
- **Axios** - HTTP client


---

## Prerequisites

Before you begin, ensure you have the following installed:

### System Requirements
- **Node.js**: >= 22.11.0
- **Git**: Latest version
- **npm** or **yarn**: Package manager

### Platform-Specific Requirements

#### For Android Development
- **Java Development Kit (JDK)**: Version 17+ (OpenJDK recommended)
- **Android SDK**: API level 35 minimum
- **Android Studio**: Latest version with Android SDK tools
- **Gradle**: Configured with Android SDK

#### For iOS Development (macOS only)
- **Xcode**: Latest version with Command Line Tools
- **CocoaPods**: Ruby dependency manager
- **Ruby**: Version 2.7 or higher
- **macOS**: 12.x or higher

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Sarojdhakal307/OutLine-Task.git
cd OutLine-Task
```

### 2. Install Node Dependencies

```bash
# Using npm
npm install

# OR using Yarn
yarn install
```

### 3. Verify Installation

```bash
# Check if everything is properly installed
npm run lint

# Run tests
npm test
```

---

## Platform-Specific Setup

### Android Setup

#### Configure Android SDK Path

1. Open Android Studio
2. Navigate to **Settings > Appearance & Behavior > System Settings > Android SDK**
3. Note the SDK Location (usually `/Users/username/Library/Android/sdk`)
4. Add to your environment variables or create a local.properties file in the `android/` directory:

```properties
# android/local.properties
sdk.dir=/path/to/android/sdk
ndk.dir=/path/to/android/ndk
```

#### Build and Run

```bash
# Build for Android
npm run android

# OR with specific device
npx react-native run-android --deviceId <device-id>
```

### iOS Setup

#### Install CocoaPods Dependencies

```bash
# First time setup
bundle install

# Install or update pod dependencies
bundle exec pod install

# If you encounter issues, try reinstalling
rm -rf Pods Podfile.lock
bundle exec pod install
```

#### Build and Run

```bash
# Build for iOS
npm run ios

# OR with specific device
npx react-native run-ios --simulator "iPhone 15"
```

---

## Development Workflow

### Start Metro Dev Server

The Metro bundler compiles your JavaScript code. Start it first:

```bash
npm start

# OR with reset cache
npm start -- --reset-cache
```

### In a New Terminal: Build and Run

#### Android (in another terminal)
```bash
npm run android
```

#### iOS (in another terminal)
```bash
npm run ios
```

### Hot Reload and Fast Refresh
- Press `R` twice to reload the app
- Modify files and save to see changes instantly (with Fast Refresh)

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Metro dev server |
| `npm run android` | Build and run on Android emulator/device |
| `npm run ios` | Build and run on iOS simulator/device |
| `npm test` | Run Jest test suite |
| `npm run lint` | Run ESLint to check code quality |

---

## Project Structure Overview

For detailed information about the folder structure, see [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md).

### Key Directories
- **`src/`** - Source code (components, screens, hooks, store, etc.)
- **`android/`** - Android native code
- **`ios/`** - iOS native code
- **`__tests__/`** - Test files
- **`node_modules/`** - Installed dependencies

---

## State Management

### Redux Store
The app uses Redux Toolkit for global state management located in `src/store/`:

- **`store.ts`** - Store configuration
- **`todos.store.ts`** - Todo items reducer
- **`filter.store.ts`** - Filter state reducer
- **`theme.store.ts`** - Theme preferences reducer

### Custom Hooks
Use the `useRedux` hook in `src/hooks/useRedux.ts` to access Redux state:

```typescript
import { useRedux } from '@/hooks/useRedux';

const { todos, dispatch } = useRedux();
```

---

## API Integration

### API Client Setup
- **Location**: `src/apis/apiServices/client.ts`
- **Base URL**: Configured via environment variables in `src/config/env.ts`

### Hooks
- **`useTodo`**: Located in `src/apis/apiHooks/useTodo.ts`
- Uses React Query for server state management

---

## Troubleshooting

### Common Issues

#### Metro Bundler Port Already in Use
```bash
# Kill the process on port 8081
lsof -i :8081 | grep LISTEN | awk '{print $2}' | xargs kill -9

# OR start on a different port
npm start -- --port 8082
```

#### Android Build Failures
```bash
# Clean and rebuild
cd android
./gradlew clean
./gradlew build
cd ..
npm run android
```

#### iOS Build Failures
```bash
# Clean and rebuild
cd ios
rm -rf Pods Podfile.lock build/
bundle exec pod install
cd ..
npm run ios
```

#### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start -- --reset-cache
```

---

## Environment Configuration

Configuration is managed in `src/config/env.ts`. Update this file with your API endpoints and environment-specific settings.

```typescript
// src/config/env.ts
export const API_BASE_URL = 'https://api.example.com';
```

---

## Testing

Run the Jest test suite:

```bash
npm test

# With coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

Tests are located in the `__tests__/` directory.

---

## Code Quality

### Linting
```bash
npm run lint

# Fix issues automatically
npm run lint -- --fix
```

### Formatting
Code is formatted with Prettier. Format on save is recommended in your IDE.

---

## Debugging

### React Native Debugger
1. Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
2. Start your app
3. Press `Cmd + D` (iOS) or `Cmd + M` (Android)
4. Select "Open Debugger"

### Chrome DevTools
1. Press `Cmd + D` (iOS) or `Cmd + M` (Android)
2. Select "Debug JS Remotely"
3. Opens Chrome DevTools for debugging

---

## Git Workflow

### Before Committing
1. Run linter: `npm run lint`
2. Run tests: `npm test`
3. Ensure all tests pass

### Commit Message Convention
Use conventional commits:
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
test: Add tests
refactor: Refactor code
```

---

## Additional Resources

- [React Native Documentation](https://reactnative.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React Query Documentation](https://tanstack.com/query/latest)
- [React Navigation Documentation](https://reactnavigation.org)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

## Getting Help

For issues or questions:
1. Check the troubleshooting section above
2. Refer to official documentation links
3. Check project issues on GitHub
4. Contact the development team

---

**Last Updated**: May 2026
