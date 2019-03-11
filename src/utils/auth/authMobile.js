// import { Facebook, Google } from 'expo'
// import firebase from '../firebase'

// export const loginFacebook = async () => {
//   const appId = '1196810150484418'
//   const permissions = ['public_profile', 'email'] // Permissions required, consult Facebook docs
//   const { type, token } = await Facebook.logInWithReadPermissionsAsync(appId, {
//     permissions,
//   })

//   switch (type) {
//     case 'success': {
//       // await firebase.auth()
//       // .setPersistence(firebase.auth.Auth.Persistence.SESSION) // Set persistent auth state
//       // const credential = firebase.auth.FacebookAuthProvider.credential(token)
//       // const facebookProfileData = await firebase
//       //   .auth()
//       //   .signInAndRetrieveDataWithCredential(credential) // Sign in with Facebook credential
//       // Do something with Facebook profile data
//       // OR you have subscribed to auth state change, authStateChange handler will process the profile data
//       return Promise.resolve({ type: 'success' })
//     }
//     case 'cancel': {
//       return Promise.reject({ type: 'cancel' })
//     }
//   }
// }

// export const loginGoogle = async () => {
//   // https://docs.expo.io/versions/v32.0.0/sdk/google/

//   const clientId =
//     '234788549203-giqs5ui96pdnb1lti2ogvdhh8vdt2elk.apps.googleusercontent.com'
//   const { type, accessToken } = await Google.logInAsync({ clientId })

//   if (type === 'success') {
//     /* Log-Out */
//     await Google.logOutAsync({ clientId, accessToken })
//     /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
//   }
// }
