import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
const app =firebase.initializeApp({
    apiKey: "AIzaSyAT_vXlTLuUpbig0nr4IQSUHU1ZfadaQ9I",
    authDomain:"foodholicappsite.firebaseapp.com",
    databaseURL: "https://foodholicappsite.firebaseio.com",
    projectId:"foodholicappsite",
    storageBucket: "foodholicappsite.appspot.com",
    messagingSenderId: "476279511593",
    appId:"1:476279511593:web:bf8fce8e634e1241a85a38"
})

 
export default app;