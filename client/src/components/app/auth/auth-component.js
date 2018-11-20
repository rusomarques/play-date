import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './auth.css';
import { PostData } from './postdata';
import { GoogleToken, facebookToken } from '../../../config';
import FacebookLogin from 'react-facebook-login';

export class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      auth: false,
      name: ''
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp(res, type) {
    let postData;

    if (type === 'facebook' && res.email) {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.access_token,
        provider_pic: res.provider_pic
      };
    }

    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    PostData('signup', postData).then(result => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem('userData', JSON.stringify(responseJson));
        this.setState({ redirect: true });
      }
    });
  }

  responseGoogle = response => {
    console.log(response);
    this.signUp(response, 'google');
    this.setState({ auth: true, name: response.w3.ig });
  };

  responseFacebook = response => {
    console.log(response);
    this.signUp(response, 'facebook');
  };

  render() {
    if (this.state.redirect) {
      return <redirect to={'/'} />;
    }

    return (
      <div>
        {!this.state.auth ? (
          <GoogleLogin
            clientId={GoogleToken}
            buttonText="G login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        ) : (
          this.state.name
        )}
        {!this.state.auth ? (
          <FacebookLogin
            appId={facebookToken}
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        ) : (
          this.state.name
        )}
      </div>
    );
  }
}
