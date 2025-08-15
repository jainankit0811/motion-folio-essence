import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type AccentColor = "blue" | "green" | "orange";

type ThemeProviderContextType = {
  theme: Theme;
  accentColor: AccentColor;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: AccentColor) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  defaultAccentColor = "blue",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultAccentColor?: AccentColor;
}) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  );
  const [accentColor, setAccentColor] = useState<AccentColor>(
    () => (localStorage.getItem("accentColor") as AccentColor) || defaultAccentColor
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    root.classList.remove("theme-blue", "theme-green", "theme-orange");
    root.classList.add(`theme-${accentColor}`);
    
    localStorage.setItem("theme", theme);
    localStorage.setItem("accentColor", accentColor);
  }, [theme, accentColor]);

  const value = {
    theme,
    accentColor,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
    setAccentColor: (color: AccentColor) => {
      setAccentColor(color);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};