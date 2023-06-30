"use client";

import { useEffect, useState } from "react";

import { getFromLocalStorage } from "@/shared/lib/getFromLocalStorage/getFromLocalStorage";

type UseThemeType = [theme: Theme | null, toggleTheme: () => void];

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export function useTheme(): UseThemeType {
  const [theme, setTheme] = useState<Theme | null>(null);

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) setTheme(Theme.DARK);
    else {
      setTheme(Theme.LIGHT);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme ?? Theme.LIGHT;
    localStorage.setItem("theme", theme ?? Theme.LIGHT);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(savedTheme ?? Theme.LIGHT);
    document.documentElement.className = savedTheme ?? Theme.LIGHT;
  }, []);

  return [theme, toggleTheme];
}
