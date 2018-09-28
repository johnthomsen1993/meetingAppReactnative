import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import auth0Client from "../../auth0/auth";

const SideBar = styled.div`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`;

const Linky = styled(Link)`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
`;


class NavBar extends React.Component {

  public render() {
    return (
      <SideBar>
        <Linky to="/">Menu</Linky>
        <Linky to="/createmeeting"> Create meeting</Linky>
        <Linky to="/meetings"> Meetings</Linky>
        {!auth0Client.isAuthenticated() && (
          <button onClick={auth0Client.login}>Sign In</button>
        )}
        {auth0Client.isAuthenticated() && (
          <div>
            <button onClick={auth0Client.logout}>Sign Out</button>
          </div>
        )}
      </SideBar>
    );
  }
}

export default NavBar;
