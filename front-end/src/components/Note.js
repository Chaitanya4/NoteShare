import { MdDeleteForever } from 'react-icons/md';

const Note = ({ _id, title, description, email, name, date,data, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span><h4 style={{color:'#635002'}}>{title}</h4></span>
			<p style={{color:'#917503'}}>{description}</p>
			<div className='note-footer'>
				<small><b>Created by :</b> {name}</small>
				<small><b>Created At :</b> {date}</small>
				{email===data.email && (<MdDeleteForever
					onClick={() => handleDeleteNote(_id)}
					className='delete-icon'
					size='2em'
				/>)}
				
			</div>
		</div>
	);
};

export default Note;
