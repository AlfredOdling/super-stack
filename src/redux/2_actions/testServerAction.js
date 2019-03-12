import {
  TEST_SERVER,
  TEST_SERVER_SUCCESS,
  TEST_SERVER_FAILURE,
} from '../1_actionTypes/testServerActionTypes'
import { logoutFB } from '../../../utils/auth'
import { posting, postSuccess, postFailure } from '../utils/postActions'
import { callPost } from '../../../utils/utils'

export default function _logout() {
  return async (dispatch, getState) => {
    dispatch(posting(TEST_SERVER))

    // const {
    //   user_id,
    //   user_full_name,
    // } = getState().userReducers.loginReducer.data

    // const instance = axios.create({
    //   baseURL: 'http://localhost:4000/',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     authorization: `Bearer ´${localStorage.getItem('id_token')}`,
    //   },
    // })

    const user_id = 123
    const user_full_name = 'Alfred'
    let route = 'http://localhost:4000'
    // let route = '/post_user'
    let body = {
      user_id,
      user_full_name,
    }

    const response = await callPost(route, body)
    const { status, data } = response

    if (status !== 200) {
      dispatch(postFailure(TEST_SERVER_FAILURE, status, data))
    } else {
      dispatch(postSuccess(TEST_SERVER_SUCCESS, status, data))
    }
  }
}

export { TEST_SERVER, TEST_SERVER_SUCCESS, TEST_SERVER_FAILURE }
