import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




const config = {
    apiKey: "AIzaSyAjGJ87pr6TJGD3lRxRmkhKDtlh8-bq170",
    authDomain: "crwn-db-a1072.firebaseapp.com",
    projectId: "crwn-db-a1072",
    storageBucket: "crwn-db-a1072.appspot.com",
    messagingSenderId: "784440458363",
    appId: "1:784440458363:web:ed5e54541002dccb01b6de",
    measurementId: "G-LRXQY2YX2E"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;