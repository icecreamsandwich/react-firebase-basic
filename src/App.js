import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class App extends Component {

constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDtoKjA5l9RbE88hMO-7WWaSurPIX0crm0",
    authDomain: "",
    databaseURL: "https://reactjs-firebase-1d5b5.firebaseio.com/",
    projectId: "reactjs-firebase-1d5b5",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container">
            <Header title="Simple Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <MessageBox db={firebase} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
