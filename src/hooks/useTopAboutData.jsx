'use client'

// src/hooks/useTopAboutData.js
import { useEffect, useState } from "react";

const CACHE_KEY = 'top_about_data';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function useTopAboutData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // Check localStorage for cached data
        const cachedItem = localStorage.getItem(CACHE_KEY);
        
        if (cachedItem) {
          const { data: cachedData, timestamp } = JSON.parse(cachedItem);
          const age = Date.now() - timestamp;
          
          // If cache is still valid (less than 24 hours old)
          if (age < CACHE_DURATION) {
            console.log("Using cached top about data");
            setData(cachedData);
            setLoading(false);
            return;
          } else {
            console.log("Cache expired, fetching fresh data");
          }
        }

        // No cache or expired, fetch fresh data
        console.log("Fetching fresh top about data from API");
        const res = await fetch("https://admin.panamatravel.co.uk/api/homepage/about");
        
        if (!res.ok) throw new Error("Failed to fetch homepage data");
        
        const json = await res.json();
        
        // Cache the fresh data with timestamp
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: json,
          timestamp: Date.now()
        }));
        
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
}
