/**
 * Environment configuration
 * Access environment variables with type safety
 */

export const env = {
  // API Configuration
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  apiKey: import.meta.env.VITE_API_KEY || '',
  
  // App Configuration
  appName: import.meta.env.VITE_APP_NAME || 'My App',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  
  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
  
  // Development mode
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,

  // Public
  publicBuildId: import.meta.env.PUBLIC_BUILD_ID || '',
  publicDiscordUrl: import.meta.env.PUBLIC_DISCORD_URL || '',
  publicGithubUrl: import.meta.env.PUBLIC_GITHUB_URL || '',
} as const

// Type-safe environment variable access
export default env
