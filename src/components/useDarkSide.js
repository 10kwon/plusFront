import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(getCurrentTheme());  
  const colorTheme = theme === true ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}