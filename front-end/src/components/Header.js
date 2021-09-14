import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='notes-header'>
			<h1>NotesShare</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
