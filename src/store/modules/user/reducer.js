import produce from 'immer';
import actionNames from "~/store/actionNames";

const INITIAL_STATE = {
  profile: null
}

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionNames.AUTH_SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.profile = action.payload.user;
        draft.signed = true;
      })
    default:
      return state;
  }
}
