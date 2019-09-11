import ActionNames from '../../actionNames';

export function signInRequest(email, password) {
  return {
    type: ActionNames.AUTH_SIGN_IN_REQUEST,
    payload: { email, password },
  }
}

export function signInSuccess(token, user) {
  return {
    type: ActionNames.AUTH_SIGN_IN_SUCCESS,
    payload: { token, user},
  }
}

export function signFailure() {
  return {
    type: ActionNames.AUTH_SIGN_FAILURE,
  }
}
