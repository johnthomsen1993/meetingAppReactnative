import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import auth0Client from '../../auth0/auth';
import loading from './loading.svg';


const CallbackDiv = styled.div`
      position: 'absolute';
      display: 'flex';
      height: '100vh';
      width: '100vw';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      backgroundColor: 'white';
`;

class Callback extends React.Component<RouteComponentProps<any>> {
  public async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  public render() {
    return (
      <CallbackDiv>
        <img src={loading} alt="loading" />
      </CallbackDiv>
    );
  }
}

export default withRouter(Callback);