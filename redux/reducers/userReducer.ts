/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UserAction, UserActionTypes } from '../../types/user';
import { UserState } from '../../types/user';

// Начальный стейт
const initialState: UserState = {
  users: [1, 2, 4],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };

    case UserActionTypes.FETCH_USERS_SUCCES:
      return { loading: false, error: null, users: action.payload };

    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };

    default:
      return state;
  }
};
