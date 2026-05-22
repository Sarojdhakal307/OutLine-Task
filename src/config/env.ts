/**
 * Environment Configuration
 * 
 * This file centralizes all environment-specific configurations.
 * Can be extended for different environments (dev, staging, prod)
 */

const ENV = {
  // API Configuration
  API: {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    TIMEOUT: 10000,
    // Note: This is a dummy API that does not persist data
    // All create/update/delete operations are handled locally
  },

  // App Configuration
  APP: {
    NAME: 'Outline - Task Manager',
    VERSION: '1.0.0',
  },

  // RTK Query Configuration
  CACHE: {
    // Cache time for todos in milliseconds
    TODO_CACHE_TIME: 5 * 60 * 1000, // 5 minutes
    // Stale time for todos in milliseconds
    TODO_STALE_TIME: 1 * 60 * 1000, // 1 minute
  },

  // Feature Flags
  FEATURES: {
    // Enable offline mode with cached data
    OFFLINE_SUPPORT: true,
    // Log API calls for debugging
    DEBUG_API: false,
  },
};

export default ENV;
