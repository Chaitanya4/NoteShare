# NoteShare
The web application login and sign up the users using Identity Engine Redirect Authentication. After the user authenticates they are redirected back to the application with an ID token and access token. After successful login, the user idToken gets Stored in the local Storage. The self-service Sign On is enabled in the Identity Engine, so that users can self sign-up and sign-in. The user can see their profile details by visiting the Profile section. The users write their notes by visiting the NotesShare Page. The notes are stored in MongoDB Atlas using node js REST API. The users can search the notes by titles using the search functionality. The creator of the notes are find out using the current user details. The users can only delete the notes created by them. The users can see the notes of all other users, find out the which notes are created by whom and at what time.
 
## Prerequisites

Before running this sample, you will need the following:

* An Okta Developer Account, you can sign up for one at https://developer.okta.com/signup/.
* An Okta Application, configured for Single-Page App (SPA) mode. This is done from the Okta Developer Console, you can see the [OIDC SPA Setup Instructions][].  When following the wizard, use the default properties.  They are are designed to work with our sample applications.

## Running This Example

Then install dependencies:

```bash
npm install
```
Now you need to gather the following information from the Okta Developer Console:

- **Client Id** - The client ID of the SPA application that you created earlier. This can be found on the "General" tab of an application, or the list of applications.  This identifies the application that tokens will be minted for.
- **Issuer** - This is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://oie-3177298.oktapreview.com/oauth2/default`.

These values must exist as environment variables. They can be exported in the shell, or saved in a file named `testenv`, at the root of this repository. (This is the parent directory, relative to this README) See [dotenv](https://www.npmjs.com/package/dotenv) for more details on this file format.

```ini
ISSUER=https://oie-xxxxxxx.oktapreview.com/
CLIENT_ID=123xxxxx123
```

With variables set, start the app server:

```
npm start
```

```

Now navigate to http://localhost:8080 in your browser.

If you see a home page that prompts you to login, then things are working!  Clicking the **Log in** button will redirect you to the Okta hosted sign-in page.

