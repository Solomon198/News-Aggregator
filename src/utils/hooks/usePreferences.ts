import { useEffect, useState } from "react";
import { preferenceStorageKey } from "../../const/utils";

const usePreferences = () => {
  const [preferences, setPreferences] = useState({
    authors: [] as string[],
    selectedCategories: [] as string[],
    selectedSources: [] as string[],
  });
  const [preferencesChanged, setPreferencesChanged] = useState(false);

  useEffect(() => {
    const $preferences = localStorage.getItem(preferenceStorageKey);
    if ($preferences) {
      setPreferences(JSON.parse($preferences));
    }
  }, []);

  useEffect(() => {
    const isNotStateEmpty = Object.values(preferences).flat(1).length;
    if (isNotStateEmpty > 0) {
      const localValue = localStorage.getItem(preferenceStorageKey);
      localStorage.setItem(preferenceStorageKey, JSON.stringify(preferences));
      setPreferencesChanged(JSON.stringify(preferences) !== localValue);
    }
  }, [preferences]);

  const handleSetAuthors = (value: string[]) => {
    setPreferences({ ...preferences, authors: value });
  };

  const handleSetSelectedSource = (value: string) => {
    const items = preferences.selectedSources;
    const index = items.findIndex(($value) => $value === value);
    if (index >= 0) {
      items.splice(index, 1);
    } else {
      items.push(value);
    }
    setPreferences({ ...preferences, selectedSources: [...items] });
  };

  const handleSetCategory = (value: string) => {
    setPreferences({ ...preferences, selectedCategories: [value] });
  };

  return {
    preferences,
    preferencesChanged,
    handleSetAuthors,
    handleSetCategory,
    handleSetSelectedSource,
  };
};
export default usePreferences;
