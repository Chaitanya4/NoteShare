
import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Container, Header, Icon, Table } from 'semantic-ui-react';

const Profile = () => {
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

  if (!userInfo) {
    return (
      <div>
        <p>Fetching user profile...</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Header as="h1">
          <Icon  name="drivers license" />
          {' '}
          User Profile
          {' '}
        </Header>
        <Container style={{backgroundColor:'rgb(144 139 218)',borderRadius:10, margin:10, padding:10,color:'white'}}>
        <p><b style={{color:'black'}}>Current user is:</b> {userInfo.name}</p>
        <p><b style={{color:'black'}}>Email:</b> {userInfo.email}</p>
        <p><b style={{color:'black'}}>Preferred Username:</b> {userInfo.preferred_username}</p>
        <p><b style={{color:'black'}}>Default Language:</b> {userInfo.locale}</p>
        <p><b style={{color:'black'}}>User Zone:</b> {userInfo.zoneinfo}</p>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
