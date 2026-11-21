// Simple in-memory cache with timestamp tracking
const cache = new Map();

/**
 * Get cached data if it exists and is not expired
 * @param {string} key - Cache key
 * @param {number} maxAge - Maximum age in milliseconds (default: 24 hours)
 * @returns {any|null} - Cached data or null if expired/missing
 */
export function getCachedData(key, maxAge = 24 * 60 * 60 * 1000) {
  const cached = cache.get(key);
  
  if (!cached) {
    return null;
  }
  
  const now = Date.now();
  const age = now - cached.timestamp;
  
  if (age > maxAge) {
    // Cache expired, remove it
    cache.delete(key);
    return null;
  }
  
  return cached.data;
}

/**
 * Set data in cache with current timestamp
 * @param {string} key - Cache key
 * @param {any} data - Data to cache
 */
export function setCachedData(key, data) {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

/**
 * Clear specific cache entry or all cache
 * @param {string|null} key - Cache key to clear, or null to clear all
 */
export function clearCache(key = null) {
  if (key) {
    cache.delete(key);
  } else {
    cache.clear();
  }
}
