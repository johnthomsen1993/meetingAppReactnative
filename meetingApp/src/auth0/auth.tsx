import * as auth0 from "react-native-auth0";
import { Alert, Platform } from "react-native";
import { Component } from "react";

class Auth extends Component<any, any> {
  public auth0 = new auth0.default({
    domain: "johntho1993.eu.auth0.com",
    clientId: "FizAnArqkf3pvHVXmgmTtrYRZ6ONeOvN"
  });

  constructor(props: any) {
    super(props);
    this.state = { accessToken: null };
  }

  _onLogin = () => {
    this.auth0.webAuth
      .authorize({
        scope: "openid profile",
        audience: "https://johnsmeetingwebapp.azurewebsites.net/api/"
      })
      .then(credentials => {
        Alert.alert(
          "Success",
          "AccessToken: " + credentials.accessToken,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        this.setState({ accessToken: credentials.accessToken });
      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === "android") {
      this.setState({ accessToken: null });
    } else {
      this.auth0.webAuth
        .clearSession()
        .then(() => {
          this.setState({ accessToken: null });
        })
        .catch(error => console.log(error));
    }
  };

  public getAccessToken() {
    return this.state.accessToken;
  }

  public isAuthenticated() {
    const accessToken = this.state.accessToken;
    if (accessToken !== null) {
      return true;
    } else {
      return false;
    }
  }
}
const auth0Client = new Auth("");

export default auth0Client;
