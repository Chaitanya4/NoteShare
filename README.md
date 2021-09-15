# NoteShare
We built this application using react js, semantic UI, okta identity engine, MongoDB and node js and deployed it to Heroku.

My Okta Identity Engine Preview Org URL is: https://oie-3177298.oktapreview.com/

The web application login and sign up the users using Okta Identity Engine Redirect Authentication. After successful login, the user idToken gets Stored in the local Storage. The Profile Enrollment is enabled in the Okta Identity Engine, so that users can self sign-up and sign-in. The user can see their profile details by visiting the Profile section. The users write their notes by visiting the NotesShare Page. The notes are stored in MongoDB Atlas using node js REST API. The users can search the notes by titles using the search functionality. The creator of the notes are find out using the current user details. The users can only delete the notes created by them. The users can see the notes of all other users, find out the which notes are created by whom and at what time.

The front-end stores the web application front-end. 
Run npm install in front-end to install the required dependencies.
Run the front-end using: npm start.

The Student_Notes_CRUD_API stores the web application back-end. 
Run npm install in Student_Notes_CRUD_API to install the required dependencies.
Run the project using: node server.js
