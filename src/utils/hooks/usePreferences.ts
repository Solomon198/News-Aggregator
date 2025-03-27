import { useEffect, useState } from "react";

const storageKey = "preferences";

const usePreferences = () => {
  const [preferences, setPreferences] = useState({
    authors: [] as string[],
    selectedCategories: [] as string[],
    selectedSources: [] as string[],
  });

  useEffect(() => {
    const $preferences = localStorage.getItem(storageKey);
    if ($preferences) {
      setPreferences(JSON.parse($preferences));
    }
  }, []);

  useEffect(() => {
    const isNotStateEmpty = Object.values(preferences).flat(1).length;
    if (isNotStateEmpty > 0) {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
    }
  }, [preferences]);

  const handleSetAuthors = (value: string[]) => {
    setPreferences({ ...preferences, authors: value });
  };

  const handleSetItems = (value: string, key: keyof typeof preferences) => {
    const items = preferences[key];
    const index = items.findIndex(($value) => $value === value);
    if (index >= 0) {
      items.splice(index, 1);
    } else {
      items.push(value);
    }
    setPreferences({ ...preferences, [key]: [...items] });
  };

  return {
    preferences,
    handleSetAuthors,
    handleSetItems,
  };
};
export default usePreferences;
