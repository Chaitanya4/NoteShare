
import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import logo from './atlogo.png';
const Navbar = ({ setCorsErrorModalOpen }) => {
  const { authState, oktaAuth } = useOktaAuth();

  // Note: Can't distinguish CORS error from other network errors
  const isCorsError = (err) => (err.name === 'AuthApiError' && !err.errorCode && err.xhr.message === 'Failed to fetch');

  const login = async () => oktaAuth.signInWithRedirect();

  const logout = async () => {
    try {
      await oktaAuth.signOut();
    } catch (err) {
      if (isCorsError(err)) {
        setCorsErrorModalOpen(true);
      } else {
        throw err;
      }
    }
  };

  if (!authState) {
    return null;
  }

  return (
    <div>
      <Menu style={{backgroundColor:"#0970d6",fontSize:17}} fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image style={{width:100,height:70}} src={logo} />
            &nbsp;
            <Link to="/"><b>NotesShare</b></Link>
          </Menu.Item>
          {authState.isAuthenticated && (
            <Menu.Item id="profile-button">
              <Link to="/profile"><b>Profile</b></Link>
            </Menu.Item>
          )}
          {authState.isAuthenticated && (
            <Menu.Item id="logout-button" onClick={logout}><b>Logout</b></Menu.Item>
          )}
          {!authState.isPending && !authState.isAuthenticated && (
            <Menu.Item onClick={login}><b>Login</b></Menu.Item>
          )}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;
