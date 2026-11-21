'use client'

// src/hooks/useHomepageData.js
import { useEffect, useState } from "react";

export function useHomepageData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://admin.panamatravel.co.uk/api/homepage");
        console.log("API is called...");
        if (!res.ok) throw new Error("Failed to fetch homepage data");
        const json = await res.json();
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
