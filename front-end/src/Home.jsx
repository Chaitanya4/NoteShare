
import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Button, Container, Header,Image } from 'semantic-ui-react';
import NotesApp from './Notes';
import notes from './notes.png';
import takenotes from './takenotes.jpeg';
const Home = () => {
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
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: '/' });
  };

  if (!authState) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <div>
        

        { authState.isAuthenticated && !userInfo
        && <div>Loading data...</div>}

        {authState.isAuthenticated && userInfo
        && (
       <NotesApp/>
        )}

        {!authState.isAuthenticated
        && (
        <div style={{backgroundColor:'#4d70ef'}}>
           <h1><center>Comprehensive underneath, simple on the surface</center></h1>
       <Image style={{width:200,height:150,margin:'auto'}} src={takenotes} />
       <h2 style={{color:'white'}}><center>A platform to write and share notes</center></h2>
       
       <Container>
       <Image style={{width:500,height:300,margin:'auto'}} src={notes} />
      
       </Container>
       <h1 style={{fontSize:40}}><center> <b>The simplest way to keep <i>notes</i></b></center></h1>
        <p style={{color:'white'}}><center>Notes are backed up with every change, so you can see what you noted last week or last month.</center></p>
        </div>
        )}

      </div>
    </div>
  );
};
export default Home;
