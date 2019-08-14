import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import Button from './ortak/Button';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';

const firebaseConfig = {
  apiKey: 'AIzaSyC-zYo1H6pUookkDT7wLqG2YlkoRbfPDgk',
  authDomain: 'kimlikdogrulama-6c9db.firebaseapp.com',
  databaseURL: 'https://kimlikdogrulama-6c9db.firebaseio.com',
  projectId: 'kimlikdogrulama-6c9db',
  storageBucket: 'kimlikdogrulama-6c9db.appspot.com',
  messagingSenderId: '567012105744',
  appId: '1:567012105744:web:e5886378b9f77f8a'
};

class Main extends Component {
  state = { loggedIn: null };
componentWillMount() {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

clickLogout() {
  this.setState({ loading: true });
  firebase.auth().signOut();
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
    return (
      <CardSection>
        <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
      </CardSection>
    );
    case false:
      return (
        <LoginForm />
    );
    default:
     return (
       <View>
        <Spinner size="large" />
       </View>
     );
  }
}


  render() {
    return (
      <View>
      <Header headerText="Giriş Ekranı" />
      {this.renderContent()}
      </View>
    );
}
}

export default Main;
