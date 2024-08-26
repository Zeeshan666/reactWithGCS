import React from 'react'
import { useThemeContext } from '../Contexts/ThemeContextProvider';


function Navbar() {
  
  const { isLightTheme, theme } = useThemeContext();

  const navStyle = {
    background: isLightTheme ? theme.light.ui : theme.dark.ui,
    color : isLightTheme ? theme.light.syntax : theme.dark.syntax
  }



  return (
    <div className="nav" style={navStyle}>
        <h1> Context App </h1>
        <ul className="horizontal-list">
            <li> Home </li> 
            <li> About </li>
            <li> Contact </li>
        </ul> 
        <br></br>
       
    </div>
  )
};

export default Navbar; 