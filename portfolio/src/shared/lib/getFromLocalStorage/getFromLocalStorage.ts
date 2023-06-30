export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem(key);
};
