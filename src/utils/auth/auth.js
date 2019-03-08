// TODO: 0Auth istället? https://docs.expo.io/versions/v32.0.0/sdk/app-auth/
// eller rena REST api:t https://docs.expo.io/versions/v32.0.0/sdk/google/

import { Platform } from 'react-native'
import * as mobile from './authMobile'
import * as web from './authWeb'

export async function signInWithFacebook() {
  const { OS } = Platform

  if (OS === 'ios' || OS === 'android') {
    mobile.loginFacebook()
  } else {
    web.loginFacebook()
  }
}

export async function signInWithGoogle() {
  const { OS } = Platform

  if (OS === 'ios' || OS === 'android') {
    mobile.loginGoogle()
  } else {
    web.loginGoogle()
  }
}
