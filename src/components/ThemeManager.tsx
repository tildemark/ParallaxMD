"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "transparent";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("dark");

    useEffect(() => {
        // Load saved theme on mount
        const saved = localStorage.getItem("parallaxmd-theme") as Theme;
        if (saved) {
            setThemeState(saved);
            applyTheme(saved);
        } else {
            applyTheme("dark");
        }
    }, []);

    const applyTheme = (newTheme: Theme) => {
        const root = document.documentElement;
        root.classList.remove("light", "dark", "theme-transparent");

        if (newTheme === "transparent") {
            root.classList.add("dark", "theme-transparent");
        } else {
            root.classList.add(newTheme);
        }
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("parallaxmd-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
