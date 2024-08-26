import React from "react";
import { useThemeContext } from "../Contexts/ThemeContextProvider";
import { useAuthContext } from "../Contexts/AuthContextProvider";


function BookList() {
	const { isLightTheme, theme } = useThemeContext();
	const { isAuthenticated, toggleAuth } = useAuthContext();

	const bookListStyle = {
		background: isLightTheme ? theme.light.bg : theme.dark.bg,
		color: isLightTheme ? theme.light.syntax : theme.dark.syntax,
	};

	const entryStyle = {
		background: isLightTheme ? theme.light.ui : theme.dark.ui,
	};


  
	return (
		<div className="book-list" style={bookListStyle}>
			{isAuthenticated ? (
				<>
					<ul>
						<li style={entryStyle}>Scorpia</li>
						<li style={entryStyle}>Hour Game</li>
						<li style={entryStyle}>Fifty Fifty</li>
					</ul>
					<button onClick={toggleAuth}> Log Out </button>
				</>
			) : (
				<div>
					<p>Please log in to view your book list.</p>
					<button onClick={toggleAuth}>Log In</button>
				</div>
			)}
		</div>
	);
}

export default BookList;
