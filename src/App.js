import React from 'react';
import Routes from './Helpers/Routes'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
var firebaseConfig = {
  apiKey: "AIzaSyBZMhUCAVXbwku38z5AkgsClrPxAv4MmKg",
  authDomain: "mosseninsider.firebaseapp.com",
  databaseURL: "https://mosseninsider.firebaseio.com",
  projectId: "mosseninsider",
  storageBucket: "mosseninsider.appspot.com",
  messagingSenderId: "508004064226",
  appId: "1:508004064226:web:9e6c4b0fb34112b224f7bb",
  measurementId: "G-D3J8S6L1SS"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()
function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
