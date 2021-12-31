import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMediaQuery } from './useMediaQuery';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
  isDarkMode: boolean,
  toggle: () => void,
  enable: () => void,
  disable: () => void,
};

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'darkMode',
    defaultValue ?? false,
  )

  useEffect(() => {
    setDarkMode(isDarkOS)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS])

  return {
    isDarkMode,
    toggle: () => setDarkMode(prev => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  }
}

export default useDarkMode