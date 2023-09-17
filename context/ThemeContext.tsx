import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';


export type Theme = 'blue' | 'teal' | 'rose' | 'purple';

type ThemeContextType = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

type ThemeProviderProps = {
    children: ReactNode;
};

const defaultThemeContext: ThemeContextType = {
    theme: 'blue',
    setTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('blue');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};