import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const [noteTitle, setNoteTitle] = useState('');
	const characterLimit = 2000;
	const titleLimit=250;
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};
	const handleTitleChange = (event) => {
		if (titleLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0 && noteTitle.trim().length>0) {
			handleAddNote(noteTitle,noteText);
			setNoteText('');
			setNoteTitle('');
			console.log(noteTitle);
			console.log(noteText);
		}
		else
		{
			alert("Either Note description or title is empty!!")
		}
	};

	return (
		<div className='note new'>
			<input type="text" placeholder="Enter Note Title..." value={noteTitle}
				onChange={handleTitleChange}/>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<div className="note-sub"><small>
					{titleLimit - noteTitle.length} characters Remaining in the title
				</small>
				<br/>
				<small>
					{characterLimit - noteText.length} characters Remaining in the description
				</small>
				
				</div>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
