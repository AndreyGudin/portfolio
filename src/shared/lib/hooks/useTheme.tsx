"use client";

import { useEffect, useState } from "react";

type UseThemeType = [theme: Theme | null, toggleTheme: () => void];

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const deleteThemeFromHTmlAndAddNew = (className: string | null) => {
  if (document.documentElement.classList.contains(Theme.LIGHT)) {
    document.documentElement.classList.remove(Theme.LIGHT);
  }
  if (document.documentElement.classList.contains(Theme.DARK)) {
    document.documentElement.classList.remove(Theme.DARK);
  }
  document.documentElement.classList.add(className ?? Theme.LIGHT);
};

export function useTheme(): UseThemeType {
  const [theme, setTheme] = useState<Theme | null>(null);

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) setTheme(Theme.DARK);
    else {
      setTheme(Theme.LIGHT);
    }
  };

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as Theme | null) ?? Theme.LIGHT;
    console.log("savedTheme", savedTheme);
    setTheme(savedTheme);
    deleteThemeFromHTmlAndAddNew(savedTheme);
  }, []);

  useEffect(() => {
    deleteThemeFromHTmlAndAddNew(theme);
    localStorage.setItem("theme", theme ?? Theme.LIGHT);
  }, [theme]);

  return [theme, toggleTheme];
}
