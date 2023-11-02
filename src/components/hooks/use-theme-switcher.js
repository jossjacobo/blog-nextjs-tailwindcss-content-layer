"use client";

import { useEffect, useState } from "react";

// System Preference Media Query
const preferDarkQuery = "(prefers-color-schema:dark)";
const storageKey = "theme";

const toggleTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  window.localStorage.setItem(storageKey, theme);
};

const getUserPreference = () => {
  const userPref = window.localStorage.getItem(storageKey);
  if (userPref) {
    return userPref;
  }
  return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
};

export function useThemeSwitch() {
  const [mode, setMode] = useState("dark");

  // When the page reloads
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Change in Mode State
  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
