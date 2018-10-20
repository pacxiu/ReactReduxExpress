const firebase = require('firebase/app');
require('firebase/database');

const FirebaseConfig = require('../config/keys');

firebase.initializeApp(FirebaseConfig);

// ref to whole database
const databaseRef = firebase.database().ref();

// ref to users
module.exports = databaseRef.child('users');