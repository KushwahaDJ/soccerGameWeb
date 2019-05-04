import firebase from './../node_modules/firebase/app';  
import 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth'; 
import 'firebase/storage'; 

const config = {
    apiKey: "AIzaSyD7hil7tAY2fxcAAnnswSn5H8wFV8rSkcU",
    authDomain: "m-city-7a8bf.firebaseapp.com",
    databaseURL: "https://m-city-7a8bf.firebaseio.com",
    projectId: "m-city-7a8bf",
    storageBucket: "m-city-7a8bf.appspot.com",
    messagingSenderId: "1026456267216"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players'); 

 export {
     firebase,
     firebaseMatches,
     firebasePromotions,
     firebaseTeams,
     firebaseDB,
     firebasePlayers
 }