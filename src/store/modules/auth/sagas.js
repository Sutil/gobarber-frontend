import { all, call, put, takeLatest } from 'redux-saga/effects';
import actionNames from '~/store/actionNames';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try{
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error('Usuário não é um prestador');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch(err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest(actionNames.AUTH_SIGN_IN_REQUEST, signIn)
]);