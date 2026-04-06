// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// const THEME_KEY = "eventpro-theme";

// function getInitialTheme() {
//   if (typeof window === "undefined") {
//     return "light";
//   }

//   const stored = window.localStorage.getItem(THEME_KEY);
//   if (stored === "light" || stored === "dark") {
//     return stored;
//   }

//   const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")
//     .matches;
//   return prefersDark ? "dark" : "light";
// }

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(getInitialTheme);

//   useEffect(() => {
//     const root = window.document.documentElement;

//     // Remove any previous theme classes just in case
//     root.classList.remove("dark");

//     if (theme === "dark") {
//       root.classList.add("dark");
//     }

//     window.localStorage.setItem(THEME_KEY, theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);



import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);