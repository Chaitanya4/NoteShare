import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	data
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					_id={note._id}
					title={note.title}
					description={note.description}
					name={note.name}
					email={note.email}
					date={note.createdAt}
					handleDeleteNote={handleDeleteNote}
					data={data}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
