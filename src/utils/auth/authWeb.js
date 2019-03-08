// import { Facebook } from 'expo'
import firebase from '../firebase'

// -------------- Facebook ----------------

export const loginFacebook = async () => {}

// -------------- Google ----------------

export const loginGoogle = async () => {
  var provider = firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      // ...
    })
}

// -------------- Email ----------------

export const signUpEmail = async () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword('alfredodling@gmail.com', 'password')
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // ...
    })
}

export const signInEmail = async () => {
  firebase
    .auth()
    .signInWithEmailAndPassword('alfredodling@gmail.com', 'password')
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // ...
    })
}

export const onAuthStateChanged = async () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName
      var email = user.email
      var emailVerified = user.emailVerified
      var photoURL = user.photoURL
      var isAnonymous = user.isAnonymous
      var uid = user.uid
      var providerData = user.providerData
      // ...
    } else {
      // User is signed out.
      // ...
    }
  })
}
