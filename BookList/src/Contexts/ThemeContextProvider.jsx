import React from 'react'
import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ( {children} ) => {

    const [ isLightTheme, setIsLightTheme ] = useState(true)
    

    const [theme] = useState({ 
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
    })

    const toggleTheme = () => setIsLightTheme(!isLightTheme)

    const themeValue = { isLightTheme, toggleTheme, theme }

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useThemeContext = () => useContext(ThemeContext) 