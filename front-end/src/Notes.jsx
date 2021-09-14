
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

import { useOktaAuth } from '@okta/okta-react';
const NotesApp = () => {
const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); 
   if (!authState) {
    return (
      <div>Loading...</div>
    );
  }
	const [notes, setNotes] = useState({});

 
	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	const [hasError, setErrors] = useState(false);
  
	async function fetchData() {
	  const res = await fetch("https://noteshare-api.herokuapp.com/notes");
	  res
		.json()
		.then(res => setNotes(res))
		.catch(err => setErrors(err));
	}
  
	useEffect(() => {
	  fetchData();
	});
	var data = Array.from(notes);

	const addNote = (title,description) => {
		const date = new Date();
		const postdata ={
			name: userInfo.name,
			email: userInfo.email,
			title: title,
			description: description
		};
		fetch('https://noteshare-api.herokuapp.com/notes/', {
    method: 'POST',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },
    body:JSON.stringify(postdata) ,
    }).then((success) => {
    console.log("dar");
    });
		
		const newNotes = [...notes,postdata];
		setNotes(newNotes);
	};

	const deleteNote = (_id) => {
		const res = fetch('https://noteshare-api.herokuapp.com/notes'+ "/" +_id, {
			method: 'DELETE',
		   });
		res
		  .then(res =>console.log(res._id))
		  .catch(err => console.log(err));
		  alert("Note deleted successfully!!");
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='notes-container'>
			  { !userInfo
        && <div>Loading data...</div>}

        {authState.isAuthenticated && userInfo
        && (
       <div>
	   <Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={data.filter((note) =>
						note.title.toLowerCase().includes(searchText.toLowerCase())
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					data={userInfo}
				/>
	   </div>
        )}
				
			</div>
		</div>
	);
};

export default NotesApp;