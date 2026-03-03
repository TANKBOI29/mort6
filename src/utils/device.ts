/**
 * Device detection utilities using react-device-detect
 */

import {
  // Device type detection
  isMobile,
  isTablet,
  isDesktop,
  isMobileOnly,
  isBrowser,
  isSmartTV,
  isWearable,
  isConsole,
  isEmbedded,
  
  // OS detection
  isAndroid,
  isIOS,
  isWinPhone,
  isWindows,
  isMacOs,
  
  // Browser detection
  isChrome,
  isFirefox,
  isSafari,
  isOpera,
  isIE,
  isEdge,
  isYandex,
  isChromium,
  isMobileSafari,
  
  // Device info
  deviceType,
  deviceDetect,
  getUA,
  
  // Custom detection
  osName,
  osVersion,
  fullBrowserVersion,
  browserName,
  browserVersion,
  mobileVendor,
  mobileModel,
  engineName,
  engineVersion,
} from 'react-device-detect'

// Re-export all imports
export {
  isMobile,
  isTablet,
  isDesktop,
  isMobileOnly,
  isBrowser,
  isSmartTV,
  isWearable,
  isConsole,
  isEmbedded,
  isAndroid,
  isIOS,
  isWinPhone,
  isWindows,
  isMacOs,
  isChrome,
  isFirefox,
  isSafari,
  isOpera,
  isIE,
  isEdge,
  isYandex,
  isChromium,
  isMobileSafari,
  deviceType,
  deviceDetect,
  getUA,
  osName,
  osVersion,
  fullBrowserVersion,
  browserName,
  browserVersion,
  mobileVendor,
  mobileModel,
  engineName,
  engineVersion,
}

/**
 * Helper function to check if screen is small (mobile or tablet)
 */
export const isSmallScreen = isMobile || isTablet

/**
 * Helper function to get device category
 */
export function getDeviceCategory(): 'mobile' | 'tablet' | 'desktop' | 'other' {
  if (isMobileOnly) return 'mobile'
  if (isTablet) return 'tablet'
  if (isDesktop) return 'desktop'
  return 'other'
}

/**
 * Helper function to check if device supports touch
 */
export function isTouchDevice(): boolean {
  return isMobile || isTablet
}
