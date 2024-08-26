import React from 'react'
import { useThemeContext } from '../Contexts/ThemeContextProvider';

function ThemeToggle() {

    const { isLightTheme, toggleTheme, theme } = useThemeContext()

    const buttonStyle = {
        background: isLightTheme ? theme.light.ui : theme.dark.ui,
        color : isLightTheme ? theme.light.syntax : theme.dark.syntax
    }

    const buttonText = isLightTheme ? 'Switch to Dark Mode' : ' Switch to Light Mode'

  return (
    <button className="toggle-theme" onClick={toggleTheme} style={buttonStyle}> {buttonText} </button>
  )
}

export default ThemeToggle